import Vue from 'vue'
import Vuex from 'vuex'
import { fetchDataSets } from './actions/fetch-data-sets'
import { fetchDataSet } from './actions/fetch-data-set'
import { fetchResource } from './actions/fetch-data-resource'
import { fetchRelatedSubjects } from './actions/fetch-related-subjects'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projectName: 'Linked Open Data',
    datasets: [],
    visited: [],
    nodes: [],
    edges: [],
    a11yMessage: null
  },
  getters: {
    ids: state => state.visited.map(v => v.id),
    last: state => state.visited[state.visited.length - 1],
    lastId: (state, getters) => getters.last.id,
    lastName: (state, getters) => getters.last.binding,
    getSetById: state => id => state.visited.find(v => v.id === id),
    edges: state => state.edges
  },
  mutations: {
    SET_DATASETS (state, data) {
      state.datasets = data
    },
    SET_DATASET (state, data) {
      state.visited.push(data)
      state.last = data
    },
    SET_A11YMESSAGE (state, data) {
      state.a11yMessage = data
    },
    SET_NODES (state, data) {
      state.nodes = data
    },
    SET_EDGES (state, data) {
      state.edges = data
    }
  },
  actions: {
    fetchDataSets,
    fetchDataSet,
    fetchResource,
    fetchRelatedSubjects,
    setA11yMessage ({commit}, message) {
      commit('SET_A11YMESSAGE', message)
    }
  }
})
