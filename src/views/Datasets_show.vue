<template>
    <transition name="fade" mode="out-in">
        <div :key="1" v-if="!loaded" class="spinner">
            <div>&hellip;loading</div>
        </div>
        <section :key="2" class="detail-layout" v-else>
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
        crumbs: null
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
          return this.$router.replace({name: '404'})
        }

        this.dataset = this.details[this.$route.params.id]
        this.id = this.dataset.id
        this.dataset = this.dataset.reduce(this.tripleReducer, {})
        await this.setTitle()
        this.setCrumbs()
        this.loaded = true;
      },
      setCrumbs() {
        this.crumbs = this.$route.meta.breadcrumb
        this.crumbs[this.crumbs.length - 1].name = this.title
      }
    },
    destroyed () {
      if (this.crumbs) {
        this.crumbs[this.crumbs.length - 1].name = ''
      }
    }
  }
</script>

<style>
</style>
