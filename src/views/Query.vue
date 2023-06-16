<template>
  <section class="detail-layout">
    <h1>Query editor</h1>
    <transition name="fade" mode="out-in" v-on:enter="enter">
      <div :key="1" v-if="!loaded" class="spinner">
        <div>&hellip;loading</div>
      </div>
      <div :key="2" id="yasgui" v-else>
        <div id="yasqe"></div>
        <div id="yasr"></div>
      </div>
    </transition>
  </section>
</template>

<script>

  export default {
    name: 'home',
    data() {
      return {
        YASQE: null,
        YASR: null,
        loaded: false
      };
    },
    async mounted() {
      this.YASQE = await import(/* webpackChunkName: "YASQE" */ '@triply/yasqe/build/yasqe.min').then(module => module.default);
      this.YASR = await import(/* webpackChunkName: "YASR" */ '@triply/yasr/build/yasr.min').then(module => module.default);
      this.loaded = true;
    },
    methods: {
      enter() {
        const yasqe = new this.YASQE(document.querySelector('#yasqe'), {
          sparql: {
            showQueryButton: true,
            endpoint: process.env.VUE_APP_SPARQL_ENDPOINT
          }
        });

        const yasr = new this.YASR(document.querySelector('#yasr'), {
          useGoogleCharts: false,
          prefixes: yasqe.getPrefixesFromQuery,
          outputPlugins: ['error', 'boolean', 'rawResponse', 'table', 'pivot'],
          output: 'table'
        });

        yasqe.on('queryResponse', (_yasqe, response) => {
          yasr.setResponse(response);
        });
        yasqe.query();
      }
    }
  }
</script>

<style>
  #yasr .yasr a:hover,
  #yasr .yasr a:focus {
    text-decoration: none !important;
  }
</style>
