<template>
    <transition name="fade" mode="out-in">
        <div :key="1" v-if="!loaded" class="spinner">
            <div>&hellip;loading</div>
        </div>
        <section :key="2" class="detail-layout" v-else>
            <h1>{{title}}</h1>
            <datadl :resource="dataset" :id="id"></datadl>
            <graph/>
        </section>
    </transition>
</template>

<script>

  import datadl from '../components/organisms/datadl'
  import { detailPageMixin } from '../mixins/detail-page.mixin'
  import { mapGetters } from 'vuex'

  export default {
    components: {datadl},
    mixins: [detailPageMixin],
    computed: {
      ...mapGetters([
        'last'
      ])
    },
    methods: {
      async fetchData () {
        try {
          await this.$store.dispatch('fetchResource', this.$route.path)
          this.dataset = this.last.bindings.reduce(this.tripleReducer, {})
          this.id = this.last.id
          await this.setTitle()
          this.loaded = true
        }
        catch (err) {
          return this.$router.replace({name: '404'})
        }
        await this.$store.dispatch('fetchRelatedSubjects', {id: this.id, dataset: this.dataset})
      }
    }
  }
</script>

