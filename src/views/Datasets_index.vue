<template>
    <section class="overview-layout">
        <h1 class="overview-title">
            <span class="overview-title-colon">LOD datasets
                <span class="colon" aria-hidden="true"></span>
            </span>
        </h1>
        <h2 class="visually-hidden">Overview</h2>
        <ul class="grid-3">
            <li class="teaser teaser-topic"
                v-for="(dataset, index) in datasets"
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
    </section>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: mapState([
      'datasets'
    ]),
    created () {
      this.fetchData()
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        this.$store.dispatch('fetchDataSets')
      }
    }
  }
</script>