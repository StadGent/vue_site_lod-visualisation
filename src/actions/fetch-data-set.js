import { instance } from '../helpers/dataset.helpers'

export async function fetchDataSet ({commit}, id) {

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

  const bindings = response?.data?.results?.bindings

  if (!bindings) {
    throw new Error('404')
  }

  await commit('SET_DATASET', {id: `${atob(id)}`, bindings})
}
