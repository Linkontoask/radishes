import { defineComponent, onMounted, ref, toRefs, VNode, watch } from 'vue'
import classnames from 'classnames'
import { BufferBlock, Block } from '@/components/process-bar/block'
import { useDrag } from '@/hooks/index'
import { on, toFixed } from '@/utils/index'
import './index.less'

const prefix = 'progress'

interface Slots {
  prefix?: () => VNode
  suffix?: () => VNode
}

export const ProgressBar = defineComponent({
  name: 'ProgressBar',
  emits: ['update:draging'],
  props: {
    canDrage: {
      type: Boolean as () => boolean,
      required: true
    },
    onChange: {
      type: (Function as unknown) as () => (x: number, w: number) => void
    },
    current: {
      type: Number as () => number,
      default: 0
    },
    onCurrent: {
      type: (Function as unknown) as () => (v: number) => void
    },
    draging: {
      type: Boolean as () => boolean
    },
    block: {
      type: Array as () => Block[]
    },
    showTooltip: {
      type: Boolean as () => boolean,
      default: true
    }
  },
  setup(props, context) {
    const {
      canDrage,
      onChange,
      draging,
      block,
      current,
      onCurrent,
      showTooltip
    } = toRefs(props)

    const container = ref()
    const indicatorContainer = ref()
    const indicator = ref()
    const visibleTip = ref(false)

    const setIndicatorX = (x: number, w: number) => {
      const width = toFixed((x / w) * 100, 6)
      const format = width > 100 ? 100 : width < 0 ? 0 : width
      if (onCurrent?.value) {
        onCurrent.value(format)
      }
    }

    const setAudioCurrent = (indicatorX: number, indicatorW: number) => {
      if (onChange?.value) {
        onChange.value(indicatorX, indicatorW)
      }
    }

    onMounted(() => {
      const {
        x,
        width
      } = (container.value as HTMLElement).getBoundingClientRect()

      const handleClick = (e: MouseEvent) => {
        if (!draging?.value) {
          const { clientX } = e
          requestAnimationFrame(() => {
            setIndicatorX(clientX - x, width)
            setAudioCurrent(clientX - x, width)
          })
        }
      }

      const { start, stop } = useDrag(
        indicatorContainer.value as HTMLElement,
        indicator.value as HTMLElement,
        {
          moveCB(x) {
            requestAnimationFrame(() => {
              setIndicatorX(x, width)
            })
          },
          startCB() {
            visibleTip.value = true
            context.emit('update:draging', true)
          },
          stopCB(x) {
            visibleTip.value = false
            context.emit('update:draging', false)
            setAudioCurrent(x, width)
          }
        }
      )

      watch(
        canDrage,
        canDrage => {
          if (canDrage) {
            on(indicator.value as HTMLElement, 'click', e =>
              e.stopPropagation()
            )
            on(container.value as HTMLElement, 'click', handleClick)
            start()
          } else {
            stop()
          }
        },
        { immediate: true }
      )
    })

    const slot = context.slots as Slots

    return () => (
      <div class={prefix}>
        {slot.prefix ? slot.prefix() : ''}
        <div
          ref={container}
          class={classnames(`${prefix}-command`, {
            [`${prefix}-command-active`]: draging?.value
          })}
        >
          <BufferBlock block={block?.value}></BufferBlock>
          <div
            ref={indicatorContainer}
            class={`${prefix}-command--indicator`}
            style={{ width: current.value + '%' }}
          >
            {showTooltip.value ? (
              <a-tooltip
                v-model={[visibleTip.value, 'visible']}
                trigger="focus"
                v-slots={{
                  title: () => (
                    <div class={`${prefix}-tip`}>{current.value | 0}</div>
                  ),
                  default: () => <button ref={indicator}></button>
                }}
              ></a-tooltip>
            ) : (
              <button ref={indicator}></button>
            )}
          </div>
        </div>
        {slot.suffix ? slot.suffix() : ''}
      </div>
    )
  }
})