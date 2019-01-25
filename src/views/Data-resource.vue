<template>
    <transition name="fade" mode="out-in">
        <div :key="1" v-if="!loaded" class="loader">
            <img src="@/assets/mob-loadingind.svg" alt="">
        </div>
        <section :key="2" class="detail-layout" v-else>
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
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      async fetchData () {
        try {
          this.dataset = await fetchResource(this.$route.path)
        }
        catch (err) {
          return this.$router.replace({name: '404'})
        }

        this.id = this.dataset.id
        this.dataset = this.dataset.reduce(this.tripleReducer, {})
        this.setTitle()
        this.loaded = true
      }
    }
  }
</script>

<style>
</style>