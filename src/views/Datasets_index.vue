<template>
    <transition name="fade">
        <section class="overview-layout" v-if="datasets.length">
            <h1 class="overview-title">
            <span class="overview-title-colon">LOD datasets
                <span class="colon" aria-hidden="true"></span>
            </span>
            </h1>
            <h2 class="visually-hidden">Overview</h2>
            <ul class="grid-3">
                <li class="teaser teaser-topic"
                    v-for="(dataset, index) in paginatedItems"
                    :key="`dataset-${index}`">
                    <article class="teaser-content">
                        <div class="content__bottom">
                            <h3>{{ dataset.title.value }}</h3>
                            <p>{{ dataset.description.value | truncate }}</p>
                            <router-link :to="{name: 'datasets_show', params: {id: dataset.btoa}}" class="read-more standalone-link">read more <span
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

<script>
  import { mapState } from 'vuex'
  import pagination from '../components/molecules/pagination'

  export default {
    components: {pagination},
    data() {
      return {
        itemsPerPage: 12
      }
    },
    computed: {
      ...mapState([
                 'datasets'
               ]),
      totalPages() {
        return Math.ceil(this.datasets.length / this.itemsPerPage)
      },
      paginatedItems() {
        const index = this.currentPage * this.itemsPerPage - this.itemsPerPage
        return this.datasets.slice(index, index + this.itemsPerPage)
      },
      currentPage() {
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
      }
    }
  }
</script>