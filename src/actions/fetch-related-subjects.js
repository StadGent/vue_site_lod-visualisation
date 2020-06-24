import axios from 'axios'
import { getTitle } from '../helpers/dataset.helpers'

export async function fetchRelatedSubjects ({commit, state}, {id, dataset}) {

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
    SELECT ?pijl ?pijlInAndereRichting ?naar
    WHERE {
        {   <${id}> 
            ?pijl 
            ?naar 
            FILTER (isIRI(?naar) && ?pijl != <http://www.w3.org/2000/01/rdf-schema#isDefinedBy>) 
        }
        UNION 
        { 
            ?naar ?pijlAndereRichting <${id}uri>
        }
    } 
    `
  let formData = new FormData()
  formData.append('query', query)

  let response = await instance({
    method: 'post',
    url: process.env.VUE_APP_SPARQL_ENDPOINT,
    data: formData,
  })

  const bindings = response.data.results.bindings

  function getLabel (value) {
    return value.substr((value.lastIndexOf('#') > -1 ? value.lastIndexOf('#') : value.lastIndexOf('/')) + 1)
  }

  const nodes = [...state.nodes]
  if (!nodes.find((node) => node.id === id)) {
    nodes.push({
      id: id,
      label: getTitle(dataset)
    })
  }
  bindings.forEach(({naar}) => {
    if (nodes.find((node) => node.id === naar.value)) {
      return
    }
    nodes.push({
      id: naar.value,
      label: getLabel(naar.value)
    })
  })

  const edges = [...state.edges]
  bindings.forEach(({naar, pijl, pijlAndereRichting}) => {
    if (edges.find(({from, to}) => from === id && to === naar.value)) {
      return
    }
    edges.push({
      from: id,
      to: naar.value,
      label: getLabel(pijl ? pijl.value : pijlAndereRichting.value),
      arrows: pijl && pijl.value ? 'to' : 'from'
    })
  })

  await commit('SET_NODES', nodes)
  await commit('SET_EDGES', edges)
}
