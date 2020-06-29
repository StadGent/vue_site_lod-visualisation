<template>
    <transition name="fade">
        <section class="overview-layout">
            <h1 class="overview-title">
                <span class="overview-title-colon">LOD datasets<span class="colon" aria-hidden="true"></span></span>
            </h1>

            <div class="cta-block highlight highlight--left link" id="ODP_CTA">
                <div class="highlight__inner">
                    <h2>Open Data Portaal</h2>
                    <p>Ga naar het <a href="https://data.stad.gent/">Stad Gent Open Data Portaal</a> voor een overzicht van alle
                        open data die Stad Gent ter beschikking stelt, bijv. ook open data die in een csv- of
                        kml-formaat gepubliceerd wordt.</p>
                    <div class="links">
                        <a href="https://data.stad.gent/" class="button button-primary">Open Data Portaal</a>
                    </div>
                </div>
            </div>
            <search class="mb-40" v-model="searchValue"/>
            <h2 class="visually-hidden">Overview</h2>
            <ul class="grid-3">
                <li class="teaser teaser-topic"
                    v-for="(dataset, index) in paginatedItems"
                    :key="`dataset-${index}`">
                    <article class="teaser-content">
                        <div class="content__bottom">
                            <h3>{{ dataset.title.value }}</h3>
                            <p>{{ dataset.description.value | truncate }}</p>
                            <router-link :to="{name: 'datasets_show', params: {id: dataset.btoa}}"
                                         class="read-more standalone-link">Lees meer <span
                                    class="visually-hidden">{{ dataset.title.value }}</span></router-link>
                        </div>
                    </article>
                    <router-link :to="{name: 'datasets_show', params: {id: dataset.btoa}}"
                                 class="teaser-overlay-link" tabindex="-1" aria-hidden="true"></router-link>
                </li>
            </ul>
            <pagination
                    :total="totalPages"
                    :active="currentPage">
            </pagination>
        </section>
    </transition>
</template>

<style>
    #ODP_CTA {
        margin-bottom: 3rem;
    }
</style>

<script>
  import { mapState } from 'vuex'
  import pagination from '../components/molecules/pagination'
  import search from '../components/molecules/search'

  export default {
    components: {search, pagination},
    data () {
      return {
        itemsPerPage: 12,
        searchValue: ''
      }
    },
    computed: {
      ...mapState([
        'datasets'
      ]),
      searchValueArray () {
        return this.searchValue.split(' ')
      },
      filteredSets () {
        return this.datasets.filter(({title, description}) => this.checkValues(this.searchValueArray, title.value + ' ' + description.value))
      },
      totalPages () {
        return Math.ceil(this.filteredSets.length / this.itemsPerPage)
      },
      paginatedItems () {
        const index = this.currentPage * this.itemsPerPage - this.itemsPerPage
        return this.filteredSets.slice(index, index + this.itemsPerPage)
      },
      currentPage () {
        const queryPage = this.$route.query.page || 1
        if (queryPage <= 0 || isNaN(queryPage)) {
          return 1
        }
        if (queryPage > this.totalPages) {
          return this.totalPages
        }
        return +queryPage
      },
    },
    created () {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      async fetchData () {
        try {
          await this.$store.dispatch('fetchDataSets')
        }
        catch (err) {
          return this.$router.replace({name: '404'})
        }
      },
      checkValues (needles, stack) {
        stack = stack.toUpperCase()
        for (let i = needles.length; i--;) {
          if (stack.indexOf(needles[i].toUpperCase()) === -1) {
            return false
          }
        }
        return true
      }
    }
  }
</script>
