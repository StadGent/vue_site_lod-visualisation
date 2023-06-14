<template>
  <header class="header header--menu">
    <div class="content-container">
      <logo/>
      <v-menu/>
    </div>
    <div class="site-name">
      {{ $store.state.projectName }}
    </div>
    <breadcrumbs/>
    <hr>
  </header>
</template>

<script>
import logo from '../molecules/logo.vue';
import breadcrumbs from '../molecules/breadcrumbs.vue';
import menu from '../molecules/menu.vue';

export default {
  components: { logo, breadcrumbs, 'v-menu': menu }
};
</script>
