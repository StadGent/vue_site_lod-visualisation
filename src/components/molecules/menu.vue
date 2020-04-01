<template>
    <nav class="menu" v-if="routes">
        <button type="button" class="toggle modal-trigger" aria-expanded="false" aria-controls="menu">menu</button>
        <ul>
            <li v-for="(route, index) in routes" :key="index">
                <router-link :to="route"
                             active-class="active"
                             :exact="route.path === '' || route.path === '/'"
                             @click.native="menu.close()">{{ route.meta.menu }}
                </router-link>
            </li>
        </ul>
        <div id="menu" ref="modal" class="modal has-custom-binding menu" role="dialog" aria-modal="true" tabindex="-1">
            <div class="modal-inner">
                <div class="modal-header">
                    <button type="button" class="button close icon-cross modal-close" data-target="menu">
                        <span>sluiten</span>
                    </button>
                </div>
                <div class="modal-content">
                    <div class="header">
                        <router-link :to="'/'" title="Home" class="site-logo" rel="home" />
                    </div>
                    <div class="menu-links">
                        <ul>
                            <li v-for="(route, index) in routes" :key="index">
                                <router-link :to="route"
                                             active-class="active"
                                             :exact="route.path === '' || route.path === '/'"
                                             @click.native="menu.close()">{{ route.meta.menu }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="modal-overlay modal-close" data-target="menu" tabindex="-1"></div>
        </div>
    </nav>
</template>

<script>
  import Modal from '@digipolis-gent/modal'

  export default {
    data () {
      return {
        menu: null
      }
    },
    computed: {
      routes: function () {
        return this.$router.options.routes.filter(route => route.meta && route.meta.menu) || []
      }
    },
    mounted () {
      this.menu = new Modal(this.$refs.modal)
    }
  }
</script>
