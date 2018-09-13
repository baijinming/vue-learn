import Vue from 'vue';
import Vuex from 'vuex';

import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count:15,
    unit:12
  },
  getters: {
    total: state => {
      return state.count * state.unit
    }
  },
  mutations,
  actions
})

export default store
