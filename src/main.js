import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Menu from './assets/styleguide_override/menu.functions'

Vue.config.productionTip = false

Vue.filter('truncate', (text, length, clamp) => {
  if (!text) {
    return ''
  }
  return text.substring(0, length || 140) + (clamp || '...')
})

require('@/assets/styleguide/js/base.js')

Vue.prototype.$menu = Menu;

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = `${to.meta.title} | LOD`
  }
  else {
    document.title = 'Linked Open Data'
  }
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
