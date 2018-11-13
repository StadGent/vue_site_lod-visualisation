import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.filter('truncate', (text, length, clamp) => {
  if (!text) {
    return ''
  }
  return text.substring(0, length || 140) + (clamp || '...')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
