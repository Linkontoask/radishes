import { MutationTree, ActionTree } from 'vuex'
import { RootState } from '@/store/index'
import { search } from '@/api/search'
import {
  SearchMutations,
  SearchActions,
  SearchState,
  SearchType,
  Pagination
} from '@/interface'
import clone from 'lodash/clone'

const calcSlice = (pagination: Pagination, page: number) => {
  const p = clone(pagination)
  p.offset = page
  const { limit, offset, total } = p
  const totalCalc = limit * offset
  if (total && totalCalc > total) {
    p.slice = totalCalc - total
  } else {
    p.slice = 0
  }
  return p.slice
}

export const actions: ActionTree<SearchState, RootState> = {
  async [SearchActions.GET_SONG_LIST]({ state, commit }, payload) {
    state.songList.loading = true
    const { slice, limit, offset } = state.songList.pagination
    const result = await search(
      payload,
      SearchType.SONG,
      state.songList.pagination
    )
    state.songList.loading = false
    state.songList.data = result.songs.slice(slice).map(song => {
      return {
        ...song,
        dt: song.duration,
        al: song.album,
        ar: song.artists,
        index: (offset - 1) * limit
      }
    })
    state.songList.total = result.songCount
    commit(
      SearchMutations.SET_SEARCH_TITLE,
      `找到 ${state.songList.total} 首歌曲`
    )
  },
  async [SearchActions.GET_ARTIST_LIST]({ state, commit }, payload) {
    state.artistList.loading = true
    const { slice, limit, offset } = state.artistList.pagination
    const result = await search(
      payload,
      SearchType.ARTIST,
      state.artistList.pagination
    )
    state.artistList.loading = false
    state.artistList.data = result.artists.slice(slice).map(artist => {
      return {
        ...artist,
        picUrl: artist.picUrl || artist.img1v1Url,
        index: (offset - 1) * limit
      }
    })
    state.artistList.total = result.artistCount
    commit(
      SearchMutations.SET_SEARCH_TITLE,
      `找到 ${state.artistList.total} 位歌手`
    )
  }
}

export const mutations: MutationTree<SearchState> = {
  [SearchMutations.SET_SEARCH_TITLE](state, txt) {
    state.searchTitle = txt
    console.log(txt)
  },
  [SearchMutations.CHANGE_SONG_PAGE_OFFSET](state, page) {
    state.songList.pagination.offset = page
    state.songList.pagination.slice = calcSlice(state.songList.pagination, page)
  },
  [SearchMutations.CHANGE_ARTIST_PAGE_OFFSET](state, page) {
    state.artistList.pagination.offset = page
    state.artistList.pagination.slice = calcSlice(
      state.artistList.pagination,
      page
    )
    console.log(state.artistList.pagination)
  }
}
