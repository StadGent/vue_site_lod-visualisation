import { getTitle } from '../helpers/dataset.helpers'
import graph from '../components/graph'

export const detailPageMixin = {
  data () {
    return {
      dataset: null,
      title: null,
      id: null,
      loaded: false
    }
  },
  components: {graph},
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    getTitle () {
      return getTitle(this.dataset)
    },
    async setTitle () {
      this.title = await this.getTitle()
      document.title = `${this.title} | LOD`
    },
    tripleReducer (acc, triple) {
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
