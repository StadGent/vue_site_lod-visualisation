<template>
    <transition name="fade">
    <section class="detail-layout" v-if="dataset">
        <h1>{{title}}</h1>
        <datadl :resource="dataset" :id="id"></datadl>
    </section>
    </transition>
</template>

<script>
  import { mapState } from 'vuex'
  import datadl from '../components/organisms/datadl'
  import { detailPageMixin } from '../mixins/detail-page.mixin'

  export default {
    components: { datadl },
    mixins: [detailPageMixin],
    data () {
      return {
        dataset: null,
        crumbs: null,
        title: null,
        id: null
      }
    },
    computed: mapState([
      'datasets',
      'details'
    ]),
    methods: {
      async fetchData () {

        try {
          await this.$store.dispatch('fetchDataSet', this.$route.params.id)
        } catch (err) {
          return this.$router.push({name: '404'})
        }

        this.dataset = this.details[this.$route.params.id]
        this.id = this.dataset.id
        this.dataset = this.dataset.reduce(this.tripleReducer, {})
        this.title = this.getTitle()
        this.setCrumbs()
      },
      setCrumbs() {
        this.crumbs = this.$route.meta.breadcrumb
        this.crumbs[this.crumbs.length - 1].name = this.title
      }
    },
    destroyed () {
      this.crumbs[this.crumbs.length - 1].name = ''
    }
  }
</script>

<style>
</style>