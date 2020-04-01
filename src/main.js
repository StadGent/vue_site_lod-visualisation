import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

/**
 * Google analytics
 */
Vue.use(VueAnalytics, {
  id: 'UA-791237-65',
  router
})

Vue.filter('truncate', (text, length, clamp) => {
  if (!text) {
    return ''
  }
  return text.substring(0, length || 140) + (clamp || '...')
})

router.beforeEach((to, from, next) => {
  let title
  if (to.meta && to.meta.title) {
    title = to.meta.title
  }

  // update document title
  document.title = title ? `${title} | LOD` : 'Linked Open Data'

  // set a11yMessage
  // delay to give assistive technology some time
  setTimeout(function () {
    store.dispatch('setA11yMessage', `pagina ${title ? title : ''} geladen`)
  }, 200)

  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
