<template>
    <section class="detail-layout">
        <h1>Query editor</h1>
        <div id="yasqe"></div>
    </section>
</template>

<script>

  import YASQE from 'yasgui-yasqe'

  export default {
    name: 'home',
    data () {
      return {
        yasqe: null
      }
    },
    mounted () {
      this.yasqe = YASQE(document.querySelector('#yasqe'), {
        sparql: {
          showQueryButton: true,
          endpoint: 'https://qa.stad.gent/sparql'
        }
      })
    }
  }
</script>

<style scoped>
    #yasqe {
        font-size: .6rem;
    }
</style>
