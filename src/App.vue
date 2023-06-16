<template>
  <div class="container">
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
import { computed } from 'vue';
import vHeader from './components/organisms/header';
import vFooter from './components/organisms/footer';
import { useStore } from 'vuex';
import './assets/sass/main.scss';

export default {
  name: 'App',
  components: { 'v-header': vHeader, 'v-footer': vFooter },
  setup() {
    const store = useStore();
    const a11yMessage = computed(() => store.state.a11yMessage);

    return {
      a11yMessage
    };
  }
};
</script>

<style>
</style>
