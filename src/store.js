import { createStore } from 'vuex';
import VuexPersistence from 'vuex-persist';
import { fetchDataSets } from './actions/fetch-data-sets';
import { fetchDataSet } from './actions/fetch-data-set';
import { fetchResource } from './actions/fetch-data-resource';
import { fetchRelatedSubjects } from './actions/fetch-related-subjects';

const vuexLocal = new VuexPersistence({
  reducer: ({ visited, nodes, edges }) => ({ visited, nodes, edges })
});

export default createStore({
  plugins: [vuexLocal.plugin],
  state() {
    return {
      projectName: 'Linked Open Data',
      datasets: [],
      visited: [],
      nodes: {},
      edges: [],
      a11yMessage: null,
      last: null
    };
  },
  getters: {
    ids: state => state.visited.map(v => v.id),
    last: state => state.last,
    lastId: state => state.last?.id,
    getSetById: state => id => state.visited.find(v => v.id === id),
    getSetByIndex: state => index => state.visited[index]
  },
  mutations: {
    SET_DATASETS(state, data) {
      state.datasets = data;
    },
    SET_DATASET(state, data) {
      state.last = data;
    },
    SET_A11YMESSAGE(state, data) {
      state.a11yMessage = data;
    },
    SET_NODES(state, data) {
      state.nodes = data;
    },
    SET_EDGES(state, data) {
      state.edges = data;
    },
    SET_VISITED(state, data) {
      state.visited.push(data);
    },
    CLEAR_GRAPH(state) {
      state.nodes = {};
      state.edges = [];
      state.visited = [];
    }
  },
  actions: {
    fetchDataSets,
    fetchDataSet,
    fetchResource,
    fetchRelatedSubjects,
    setA11yMessage({ commit }, message) {
      commit('SET_A11YMESSAGE', message);
    }
  }
});
