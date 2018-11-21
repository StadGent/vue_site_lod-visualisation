import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projectName: 'Linked Open Data',
    datasets: []
  },
  mutations: {
    SET_DATASETS (state, data) {
      state.datasets = data
    }
  },
  actions: {
    fetchDataSets ({commit}) {

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

      axios({
        method: 'post',
        url: 'https://stad.gent/sparql',
        data: formData,
        config: {headers: {'accept': 'application/sparql-results+json'}}
      })
        .then(response => response.data.results.bindings)
        .then(datasets => datasets.map(set => {
            set.btoa = btoa(set.dataset.value)
            return set
          })
        )
        .then(datasets => commit('SET_DATASETS', datasets))
    }
  }
})
