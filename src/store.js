import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

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
    async fetchDataSets ({commit}) {

      // only fetch datasets once
      if (this.state.datasets.length) {
        return
      }

      const query =
        `PREFIX dcterm: <http://purl.org/dc/terms/>
        PREFIX dct: <http://purl.org/dc/terms/>
        PREFIX dcterms: <http://purl.org/dc/terms/>
        PREFIX dcat: <http://www.w3.org/ns/dcat#>
        SELECT ?dataset ?title ?description
        FROM <http://stad.gent/dcat/linked-data/>
        WHERE { ?dataset a dcat:Dataset; dcterms:title ?title; dcterms:description ?description.} 
        ORDER BY ?title`

      let formData = new FormData()
      formData.set('query', query)

      let response = await axios({
        method: 'post',
        url: 'https://stad.gent/sparql',
        data: formData,
        config: {headers: {'accept': 'application/sparql-results+json'}}
      })

      response = response.data.results.bindings
      response.map(dataset => {
        dataset.btoa = btoa(dataset.dataset.value)
        return btoa
      })

      commit('SET_DATASETS', response)
    },
    async fetchDataSet ({commit}, id) {

      // only fetch dataset once
      if (this.state.details[id]) {
        return
      }

      const query =
        `
          PREFIX dcat:    <http://www.w3.org/ns/dcat#>
          PREFIX dcterms: <http://purl.org/dc/terms/>
          SELECT ?title ?description
          FROM <http://stad.gent/dcat/linked-data/>
          WHERE {
             <${atob(id)}> a dcat:Dataset;
                      dcterms:title ?title;
                      dcterms:description ?description.
          }
    `
      let formData = new FormData()
      formData.set('query', query)

      let response = await axios({
        method: 'post',
        url: 'https://stad.gent/sparql',
        data: formData,
        config: {headers: {'accept': 'application/sparql-results+json'}}
      })

      response = response.data.results.bindings[0]
      response.id = id
      commit('SET_DATASET', response)
    }
  }
})
