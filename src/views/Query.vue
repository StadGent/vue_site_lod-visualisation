<template>
    <section class="detail-layout">
        <h1>Query editor</h1>
        <div id="yasqe"></div>
        <div id="yasr"></div>
    </section>
</template>

<script>

  export default {
    name: 'home',
    async mounted () {

      const YASQE = await import(/* webpackChunkName: "YASQE" */ 'yasgui-yasqe/dist/yasqe.bundled.min').then(module => module.default)

      let yasqe = YASQE(document.querySelector('#yasqe'), {
        sparql: {
          showQueryButton: true,
          endpoint: process.env.VUE_APP_SPARQL_ENDPOINT
        }
      })

      const YASR = await import(/* webpackChunkName: "YASR" */ 'yasgui-yasr/dist/yasr.bundled.min').then(module => module.default);

      let yasr = YASR(document.querySelector('#yasr'), {
        useGoogleCharts: false,
        getUsedPrefixes: yasqe.getPrefixesFromQuery,
        outputPlugins:  ['error', 'boolean', 'rawResponse', 'table', 'pivot'],
        output: "table"
      })
      yasqe.options.sparql.callbacks.complete = yasr.setResponse
    }
  }
</script>

<style scoped>
    @import "~yasgui-yasqe/dist/yasqe.min.css";

    /* Issue logged for yasgui-yasr,
    ** import not possible due to relative modules not found.
    ** @import "~yasgui-yasr/dist/yasr.min.css";
    */
</style>
