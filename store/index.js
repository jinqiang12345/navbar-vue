import Vuex from 'vuex'

import mutations from './mutations'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0,
      zz: 'change'
    },
    mutations
  })
}

export default createStore
