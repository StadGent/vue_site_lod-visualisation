<template>
    <section class="detail-layout">
        <h1>Query editor</h1>
        <div id="yasqe"></div>
        <div id="yasr"></div>
    </section>
</template>

<script>

  import YASQE from 'yasgui-yasqe/dist/yasqe.bundled'
  import YASR from 'yasgui-yasr/dist/yasr.bundled'

  export default {
    name: 'home',
    mounted () {
      let yasqe = YASQE(document.querySelector('#yasqe'), {
        sparql: {
          showQueryButton: true,
          endpoint: 'https://qa.stad.gent/sparql'
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

<style>
</style>
