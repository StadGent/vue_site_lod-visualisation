import Vue from 'vue'
import Vuex from 'vuex'
import { fetchDataSets } from './actions/fetch-data-sets'
import { fetchDataSet } from './actions/fetch-data-set'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projectName: 'Linked Open Data',
    datasets: [],
    details: {},
    a11yMessage: null
  },
  mutations: {
    SET_DATASETS (state, data) {
      state.datasets = data
    },
    SET_DATASET (state, data) {
      state.details[data.id] = data
    },
    SET_A11YMESSAGE (state, data) {
      state.a11yMessage = data
    }
  },
  actions: {
    fetchDataSets,
    fetchDataSet,
    setA11yMessage({commit}, message) {
      commit('SET_A11YMESSAGE', message)
    }
  }
})
