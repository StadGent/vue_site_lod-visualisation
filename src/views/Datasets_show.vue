<template>
    <section class="detail-layout" v-if="dataset">
        <h1>{{title}}</h1>
        <dl class="dataset">
            <template v-for="(key,index) in sortKeys(Object.keys(dataset))">
                <dt :key="`dt-${index}`">{{key}}</dt>
                <dd :key="`dd-${index}`">
                    <ul v-if="dataset[key].length > 1">
                        <li v-for="(triple, index) in dataset[key]" :key="`${key}-${index}`">
                            <a class="uri" v-if="triple.o.type === 'uri'"
                               :href="triple.o.value">{{triple.o.value}}</a>
                            <span v-else>{{triple.o.value}}</span>
                        </li>
                    </ul>
                    <span v-else v-for="(triple, index) in dataset[key]" :key="`${key}-${index}`">
                                <a class="uri" v-if="triple.o.type === 'uri'"
                                   :href="triple.o.value">{{triple.o.value}}</a>
                                <span v-else>{{triple.o.value}}</span>
                        </span>
                </dd>
            </template>
        </dl>
    </section>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    data () {
      return {
        dataset: null,
        crumbs: null,
        title: null
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
        this.dataset = this.dataset.reduce((acc, triple) => {
          const p = triple.p.value
          let pieces = p.split('/')
          let shortName = pieces[pieces.length - 1].split('#')
          shortName = shortName[shortName.length - 1]

          if (!acc[shortName]) {
            acc[shortName] = []
          }
          acc[shortName].push(triple)
          return acc
        }, {})
        this.setTitle()
      },
      setTitle () {
        this.title = this.dataset.title ? this.dataset.title[0].o.value : 'detail'
        this.crumbs = this.$route.meta.breadcrumb
        this.crumbs[this.crumbs.length - 1].name = this.title
      },
      sortKeys (keys) {
        return keys.sort((a, b) => {
          if (a > b) {
            return 1
          }
          if (b > a) {
            return -1
          }
          return 0
        })
      }
    },
    destroyed () {
      this.crumbs[this.crumbs.length - 1].name = ''
    }
  }
</script>

<style>
    .dataset a.uri {
        display: block;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
</style>