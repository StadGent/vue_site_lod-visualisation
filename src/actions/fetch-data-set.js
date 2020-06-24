import axios from 'axios'

export async function fetchDataSet ({commit}, id) {

  const instance = axios.create({
    transformRequest: [
      (data, headers) => {
        headers.common.Accept = 'application/sparql-results+json'
        return data
      },
    ]
  })

  const query =
    `
    DESCRIBE <${atob(id)}>
    `
  let formData = new FormData()
  formData.append('query', query)

  let response = await instance({
    method: 'post',
    url: process.env.VUE_APP_SPARQL_ENDPOINT,
    data: formData,
  })

  await commit('SET_DATASET', {id: `${atob(id)}`, bindings: response.data.results.bindings})
}
