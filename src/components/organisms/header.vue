<template>
  <header class="header">
    <div class="content-container">
      <logo/>
    </div>
    <breadcrumbs v-if="hasBreadcrumbs"/>
    <hr>

    <div class="subsite">
      <span>Linked Open Data</span>
    </div>

  </header>
</template>

<script>
import logo from '../molecules/logo'
import breadcrumbs from '../molecules/breadcrumbs'

export default {
  components: {logo, breadcrumbs},
  computed: {
    hasBreadcrumbs () {
      return (
        (this.$store.state.breadcrumbs &&
            this.$store.state.breadcrumbs.length > 0) === true
      )
    }
  }
}
</script>
