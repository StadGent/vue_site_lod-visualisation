<template>
    <section class="detail-layout">
        <h1>Query editor</h1>
        <div id="yasqe"></div>
        <div id="yasr"></div>
    </section>
</template>

<script>

  import YASQE from 'yasgui-yasqe/dist/yasqe.bundled.min'
  import YASR from 'yasgui-yasr/dist/yasr.bundled.min'

  export default {
    name: 'home',
    mounted () {
      let yasqe = YASQE(document.querySelector('#yasqe'), {
        sparql: {
          showQueryButton: true,
          endpoint: process.env.VUE_APP_SPARQL_ENDPOINT
        }
      })
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
