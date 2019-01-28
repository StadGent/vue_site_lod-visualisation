export const detailPageMixin = {
  data() {
    return {
      dataset: null,
      title: null,
      id: null,
      loaded: false
    }
  },
  created() {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    getTitle () {
      const predicates = ['prefLabel', 'label', 'title', 'name', 'firstName']
      for (let i = 0; i < predicates.length; i++) {
        if (this.dataset[predicates[i]]) {
          return this.dataset[predicates[i]][0].o.value;
        }
      }
      return 'detail view'
    },
    async setTitle () {
      this.title = await this.getTitle()
      document.title = `${this.title} | LOD`
    },
    tripleReducer(acc, triple) {
      const p = triple.p.value
      let lastIndex = p.lastIndexOf('#') > -1 ? p.lastIndexOf('#') : p.lastIndexOf('/')
      let shortName = p.substr(lastIndex + 1)

      if (!acc[shortName]) {
        acc[shortName] = []
      }
      acc[shortName].push(triple)
      return acc
    }
  }
}