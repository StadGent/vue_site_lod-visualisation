import { getLabel, getTitle, instance } from '../helpers/dataset.helpers'

export async function fetchRelatedSubjects ({commit, state}, {id, dataset}) {

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

  const response = await instance({
    method: 'post',
    url: process.env.VUE_APP_SPARQL_ENDPOINT,
    data: formData,
  })

  const bindings = response?.data?.results?.bindings

  if (!bindings) {
    return
  }

  id = id.replace(/http.?:\/\//, '')

  const nodes = [...state.nodes]
  if (!nodes.find((node) => node.id === id)) {
    nodes.push({
      id: id.replace(/http.?:\/\//, ''),
      label: getTitle(dataset)
    })
  }
  bindings.forEach(({naar}) => {
    const nodeId = naar.value.replace(/http.?:\/\//, '')
    if (nodes.find((node) => node.id === nodeId)) {
      return
    }
    nodes.push({
      id: nodeId,
      label: getLabel(naar.value)
    })
  })

  const edges = [...state.edges]
  bindings.forEach(({naar, pijl, pijlAndereRichting}) => {
    const nodeId = naar.value.replace(/http.?:\/\//, '')
    if (edges.find(({from, to}) => from === id && to === nodeId)) {
      return
    }
    edges.push({
      from: id,
      to: nodeId,
      label: getLabel(pijl ? pijl.value : pijlAndereRichting.value),
      arrows: pijl && pijl.value ? 'to' : 'from'
    })
  })

  await commit('SET_NODES', nodes)
  await commit('SET_EDGES', edges)
}
