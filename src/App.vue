<template>
  <div class="cs--cyan container">
    <a href="#main" class="skiplink">Overslaan en naar de inhoud gaan</a>
    <v-header/>
    <main id="main" class="content-container">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </main>
    <v-footer/>
    <div role="status" aria-atomic="true" aria-live="polite" class="visually-hidden">{{ a11yMessage }}</div>
  </div>
</template>

<script>
import vHeader from './components/organisms/header'
import vFooter from './components/organisms/footer'
import { mapState } from 'vuex'
import './assets/sass/main.scss'

export default {
  name: 'App',
  components: { 'v-header': vHeader, 'v-footer': vFooter },
  computed: mapState([
    'a11yMessage'
  ])
}
</script>

<style>
</style>
