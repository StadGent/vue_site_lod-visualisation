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
    data () {
      return {
        YASQE: null,
        YASR: null,
        loaded: false
      }
    },
    async mounted () {
      this.YASQE = await import(/* webpackChunkName: "YASQE" */ 'yasgui-yasqe/dist/yasqe.bundled.min').then(module => module.default)
      this.YASR = await import(/* webpackChunkName: "YASR" */ 'yasgui-yasr/dist/yasr.bundled.min').then(module => module.default)
      this.loaded = true
    },
    methods: {
      enter () {
        const yasqe = this.YASQE(document.querySelector('#yasqe'), {
          sparql: {
            showQueryButton: true,
            endpoint: process.env.VUE_APP_SPARQL_ENDPOINT
          }
        })

        const yasr = this.YASR(document.querySelector('#yasr'), {
          useGoogleCharts: false,
          getUsedPrefixes: yasqe.getPrefixesFromQuery,
          outputPlugins: ['error', 'boolean', 'rawResponse', 'table', 'pivot'],
          output: 'table'
        })

        yasqe.options.sparql.callbacks.complete = yasr.setResponse
        yasqe.query();
      }
    }
  }
</script>

<style scoped>
    @import "~yasgui-yasqe/dist/yasqe.min.css";

    /* Issue logged for yasgui-yasr,
    ** import not possible due to relative modules not found.
    ** @import "~yasgui-yasr/dist/yasr.min.css";
    */

    /*
    ** Deep selector for child components.
    */
    >>> .yasr a:hover, .yasr a:focus {
      text-decoration: none;
    }
</style>
