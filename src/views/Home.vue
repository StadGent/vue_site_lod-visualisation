<template>
    <section class="detail-layout">
        <h1>Home</h1>
        <p>
            Deze pagina's bieden een overzicht van de open datasets van Stad Gent die als Linked Open Data zijn
            gepubliceerd
            (en geraadpleegd kunnen worden via het <a href="https://stad.gent/sparql">Virtuoso SPARQL endpoint van Stad
            Gent</a>).
            Linked Open Data omvat gestructureerde informatie in een formaat dat bestemd is voor machines en dus niet
            noodzakelijk makkelijk leesbaar voor mensen.
        </p>

        <div class="cta-block highlight highlight--left link">
            <div class="highlight__inner">
                <h2>Open Data Portaal</h2>
                <p>Ga naar het <a href="https://data.stad.gent/">Stad Gent Open Data Portaal</a> om deze datasets te
                    filteren op o.a. trefwoord en categorie. U vindt op het Open Data Portaal een overzicht van alle
                    open data die Stad Gent ter beschikking stelt, bijv. ook open data die in een csv- of kml-formaat
                    gepubliceerd wordt.</p>
                <div class="links">
                    <a href="https://data.stad.gent/" class="button button-primary">Open Data Portaal</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

  export default {
    name: 'home',
  }
</script>
