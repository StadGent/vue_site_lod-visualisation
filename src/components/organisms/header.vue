<template>
  <header class="header">
    <div class="content-container">
      <logo/>
      <v-menu/>
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
import menu from '../molecules/menu'

export default {
  components: {logo, breadcrumbs, 'v-menu': menu}
}
</script>
