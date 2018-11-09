<template>
  <header class="header">
    <div class="content-container">
      <logo/>
    </div>
    <breadcrumbs/>
    <hr>

    <div class="subsite">
      <span>{{ $store.state.projectName }}</span>
    </div>

  </header>
</template>

<script>
import logo from '../molecules/logo'
import breadcrumbs from '../molecules/breadcrumbs'

export default {
  components: {logo, breadcrumbs}
}
</script>
