<template>
  <div class="cs--cyan container">
    <a href="#main" class="skiplink">Overslaan en naar de inhoud gaan</a>
    <v-header/>
    <main id="main">
      <section class="content-container">
        <router-view/>
      </section>
    </main>
    <v-footer/>
  </div>
</template>

<script>
import vHeader from './components/organisms/header'
import vFooter from './components/organisms/footer'
import './assets/sass/main.scss'

export default {
  name: 'App',
  components: { 'v-header': vHeader, 'v-footer': vFooter }
}
</script>

<style>
</style>
