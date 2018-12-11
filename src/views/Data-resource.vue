<template>
    <transition name="fade">
        <section class="detail-layout" v-if="this.dataset">
            <h1>{{title}}</h1>
            <datadl :resource="dataset" :id="id"></datadl>
        </section>
    </transition>
</template>

<script>

  import { fetchResource } from '../actions/fetch-data-resource'
  import datadl from '../components/organisms/datadl'
  import { detailPageMixin } from '../mixins/detail-page.mixin'

  export default {
    components: {datadl},
    mixins: [detailPageMixin],
    data () {
      return {
        dataset: null,
        title: null,
        id: null
      }
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      async fetchData () {
        try {
          this.dataset = await fetchResource(this.$route.path)
        }
        catch (err) {
          return this.$router.push({name: '404'})
        }

        this.id = this.dataset.id
        this.dataset = this.dataset.reduce(this.tripleReducer, {})
        this.setTitle()
      }
    }
  }
</script>

<style>
</style>