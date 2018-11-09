<template>
    <nav v-if="crumbs && crumbs.length"
         class="breadcrumb section--default" aria-labelledby="system-breadcrumb">
        <div class="content-container">
            <h2 id="system-breadcrumb" class="visually-hidden">Breadcrumb</h2>
            <ol class="breadcrumb no-style">
                <li v-for="(crumb, index) in crumbs" :key="index">
                    <router-link v-if="crumb.link" :to="{ name: crumb.link }">{{ crumb.name }}</router-link>
                    <span v-else>{{ crumb.name }}</span>
                </li>
            </ol>
        </div>
    </nav>
</template>

<script>
  export default {
    data () {
      return {
        crumbs: []
      }
    },
    watch: {
      '$route' () {
        this.updateCrumbs()
      }
    },
    mounted () {
      this.updateCrumbs()
    },
    methods: {
      updateCrumbs () {
        this.crumbs = this.$route.meta ? this.$route.meta.breadcrumb : []
      }
    }
  }
</script>
