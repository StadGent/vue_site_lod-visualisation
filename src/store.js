import Vue from 'vue'
import Vuex from 'vuex'
import { fetchDataSets } from './actions/fetch-data-sets'
import { fetchDataSet } from './actions/fetch-data-set'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projectName: 'Linked Open Data',
    datasets: [],
    details: {}
  },
  mutations: {
    SET_DATASETS (state, data) {
      state.datasets = data
    },
    SET_DATASET (state, data) {
      state.details[data.id] = data
    }
  },
  actions: {
    fetchDataSets,
    fetchDataSet
  }
})
