<template>
  <router-link :to="'/'" title="Home" class="site-logo subsite" rel="home">
    {{ $store.state.projectName }}
  </router-link>
</template>
