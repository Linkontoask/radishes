import {
  defineComponent,
  toRefs,
  onBeforeMount,
  onActivated,
  onDeactivated
} from 'vue'
import { Swiper } from '@/components/swiper/index'
import { RecommendState, NAMESPACED } from '../module'
import { RecommendActions } from '../sage'
import { SongList } from '@/components/song-list/index'
import { uesModuleStore } from '@/hooks/index'
import { toPlaylist } from '@/pages/news/utils'
import './index.less'

export const Recommend = defineComponent({
  name: 'Recommend',
  setup() {
    const { useState, useActions } = uesModuleStore<RecommendState>(NAMESPACED)
    const { banners, songList, runningSwiper } = toRefs(useState())

    const getBanner = () => {
      useActions(RecommendActions.SET_ACTION_BANNERS)
    }
    const getSongList = () => {
      useActions(RecommendActions.SET_ACTION_SONG_LIST)
    }

    onActivated(() => {
      runningSwiper.value = true
    })

    onDeactivated(() => {
      runningSwiper.value = false
    })

    onBeforeMount(() => {
      getBanner()
      getSongList()
    })

    return () => (
      <div class="find-music-recommend">
        <div class="swiper-box">
          <Swiper
            banners={banners.value}
            running={runningSwiper.value}
          ></Swiper>
        </div>
        <div class="recommend-song">
          <h2>推荐歌单</h2>
          <SongList songData={songList.value} handle={toPlaylist}></SongList>
        </div>
      </div>
    )
  }
})
