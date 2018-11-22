<template>
    <nav class="menu" v-if="routes.length">
        <button class="toggle">Menu</button>
        <div class="overlay"></div>
        <div class="drawer" tabindex="-1">
            <div class="header">
                <a href="#" title="Home" class="site-logo " rel="home"></a>
                <button class="close">Menu sluiten</button>
            </div>
            <ul class="links">
                <li v-for="(route, index) in routes" :key="index">
                    <router-link :to="route" active-class="active" :exact="!route.path.length" @click.native="menu.close()">{{ route.title }}
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
  export default {
    data () {
      return {
        menu: null
      }
    },
    computed: {
      routes: function () {
        return this.$router.options.routes.filter(route => route.title) || []
      }
    },
    mounted () {
      this.menu = new this.$menu(this.$el)
    }
  }
</script>
