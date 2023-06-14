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

  function nodes () {
    const nodes = {...state.nodes}
    if (!(id in nodes)) {
      nodes[id] = {
        id: id.replace(/http.?:\/\//, ''),
        label: getTitle(dataset)
      };
    }
    bindings.forEach(({naar}) => {
      const nodeId = naar.value.replace(/http.?:\/\//, '')
      if (nodeId in nodes) {
        return
      }
      nodes[nodeId] = {
        id: nodeId,
        label: getLabel(naar.value)
      };
    })

    return nodes
  }

  function edges () {
    const edges = [...state.edges]
    bindings.forEach(({naar, pijl, pijlAndereRichting}) => {
      const nodeId = naar.value.replace(/http.?:\/\//, '')
      if (edges.find(({source, target}) => source === id && target === nodeId)) {
        return
      }
      edges.push({
        source: pijl && pijl.value ? id: nodeId,
        target: pijl && pijl.value ? nodeId : id,
        label: getLabel(pijl ? pijl.value : pijlAndereRichting.value)
      })
    })

    return edges
  }

  try {
    await commit('SET_VISITED', state.last)
    await commit('SET_NODES', nodes())
    await commit('SET_EDGES', edges())
  }
  catch (e) {
    await commit('CLEAR_GRAPH')
    try {
      await commit('SET_VISITED', state.last)
      await commit('SET_NODES', nodes())
      await commit('SET_EDGES', edges())
    }
    catch (e) {
      await commit('CLEAR_GRAPH')
      console.error('cleared graph, but still unable to add nodes', e)
    }
  }
}
