import axios from 'axios'

export const instance = axios.create({
  transformRequest: [
    (data, headers) => {
      headers.Accept = 'application/sparql-results+json'
      return data
    },
  ]
})

export function getTitle (bindings) {
  const predicates = ['prefLabel', 'label', 'title', 'name', 'firstName']
  for (let i = 0; i < predicates.length; i++) {
    if (bindings[predicates[i]]) {
      return bindings[predicates[i]][0].o.value
    }
  }
  return 'detail view'
}

export function getLabel (value) {
  return value.substr((value.lastIndexOf('#') > -1 ? value.lastIndexOf('#') : value.lastIndexOf('/')) + 1)
}
