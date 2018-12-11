import axios from 'axios'

export async function fetchDataSet ({commit}, id) {

  // only fetch dataset once
  if (this.state.details[id]) {
    return
  }

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
  formData.set('query', query)

  let response = await instance({
    method: 'post',
    url: 'https://qa.stad.gent/sparql',
    data: formData,
  })

  response = response.data.results.bindings
  response.id = id
  commit('SET_DATASET', response)
}