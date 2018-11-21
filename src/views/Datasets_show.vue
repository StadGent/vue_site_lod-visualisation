<template>
    <div>
        <div v-if="dataset">
            <h1>{{ dataset.title.value }}</h1>
            <div>{{ dataset }}</div>
        </div>
    </div>

</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        dataset: null,
        crumbs: null
      }
    },
    computed: mapState([
      'datasets',
      'details'
    ]),
    created () {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      async fetchData () {
        await this.$store.dispatch('fetchDataSet', this.$route.params.id)
        this.dataset = this.details[this.$route.params.id]
        this.crumbs = this.$route.meta.breadcrumb
        this.crumbs[this.crumbs.length - 1].name = this.dataset.title.value
      }
    },
    destroyed () {
      this.crumbs[this.crumbs.length - 1].name = ''
    }
  }
</script>