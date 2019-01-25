import axios from 'axios'

export async function fetchResource (id) {

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
    DESCRIBE <http://${process.env.VUE_APP_SUBDOMAIN}stad.gent/id${id}> <https://${process.env.VUE_APP_SUBDOMAIN}stad.gent/id${id}>
    `

  let formData = new FormData()
  formData.append('query', query)

  let response = await instance({
    method: 'post',
    url: process.env.VUE_APP_SPARQL_ENDPOINT,
    data: formData,
  })

  response = response.data.results.bindings
  response.id = id

  if (!response.length) {
    throw new Error('404')
  }

  return response
}