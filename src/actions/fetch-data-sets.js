import axios from 'axios'

export async function fetchDataSets ({commit}) {

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
    url: process.env.VUE_APP_SPARQL_ENDPOINT,
    data: formData,
    config: {headers: {'accept': 'application/sparql-results+json'}}
  })

  response = response.data.results.bindings
  response.map(dataset => {
    dataset.btoa = btoa(dataset.dataset.value)
    return btoa
  })

  commit('SET_DATASETS', response)
}