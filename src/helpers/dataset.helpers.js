export function getTitle (bindings) {
  const predicates = ['prefLabel', 'label', 'title', 'name', 'firstName']
  for (let i = 0; i < predicates.length; i++) {
    if (bindings[predicates[i]]) {
      return bindings[predicates[i]][0].o.value
    }
  }
  return 'detail view'
}
