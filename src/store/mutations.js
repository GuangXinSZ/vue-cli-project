import types from './mutations-types'

const mutations = {
  [types.SET_CITY] (state, city) {
    state.city = city
  },
  [types.SET_CITY_LIST] (state, list) {
    state.cityList = list
  },
  [types.SET_FULL_SCREEN] (state, flag) {
    state.fullScreen = flag
  },
  [types.SET_PLAY] (state, playState) {
    state.player = playState
  }
}

export default mutations
