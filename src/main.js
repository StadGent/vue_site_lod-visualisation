import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueGtag from 'vue-gtag';

const app = createApp(App);

app.use(router);
app.use(store);

/**
 * Google analytics
 */
app.use(VueGtag, { config: { id: 'UA-791237-65' } }, router);

app.config.productionTip = false;

app.config.globalProperties.$filters = {
  truncate: (text, length, clamp) => {
    if (!text) {
      return '';
    }
    return text.substring(0, length || 140) + (clamp || '...');
  }
};

router.beforeEach((to, from, next) => {
  let title;
  if (to.meta && to.meta.title) {
    title = to.meta.title;
  }

  // update document title
  document.title = title ? `${title} | LOD` : 'Linked Open Data';

  // set a11yMessage
  // delay to give assistive technology some time
  setTimeout(function () {
    store.dispatch('setA11yMessage', `pagina ${title ? title : ''} geladen`)
      .catch((e) => console.error("unable to set a11y message", e));
  }, 200);

  next();
});

app.mount('#app');
