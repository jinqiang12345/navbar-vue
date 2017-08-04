const mutations = {
  increment (state) {
    state.counter++
  },
  decrement (state) {
    state.counter--
  },
  getzz (state) {
    state.zz = 'zz'
  },
  setzz (state, params) {
    state.zz = params
  }
}

export default mutations
