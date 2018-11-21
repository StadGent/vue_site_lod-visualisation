<template>
    <h1>detail</h1>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: mapState([
      'datasets'
    ]),
    created () {
      let crumbs = this.$route.meta.breadcrumb;
      crumbs[crumbs.length-1].name = this.$route.params.id
    }
  }
</script>