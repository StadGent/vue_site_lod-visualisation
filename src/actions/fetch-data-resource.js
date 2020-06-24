import { instance } from '../helpers/dataset.helpers'

export async function fetchResource ({commit}, id) {

  const query =
    `
    DESCRIBE <http://${process.env.VUE_APP_SUBDOMAIN}stad.gent/id${id}> <https://${process.env.VUE_APP_SUBDOMAIN}stad.gent/id${id}>
    `
  let formData = new FormData()
  formData.append('query', query)

  const response = await instance({
    method: 'post',
    url: process.env.VUE_APP_SPARQL_ENDPOINT,
    data: formData,
  })

  const bindings = response.data.results.bindings

  if (!bindings) {
    throw new Error('404')
  }

  await commit('SET_DATASET', {id: `https://${process.env.VUE_APP_SUBDOMAIN}stad.gent/id${id}`, bindings})
}
