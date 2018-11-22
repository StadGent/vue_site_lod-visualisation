import axios from 'axios'

export async function fetchDataSet ({commit}, id) {

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