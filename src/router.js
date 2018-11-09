import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      title: 'Home'
    },
    {
      path: '/datasets',
      name: 'datasets',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "datasets" */ './views/Datasets.vue'),
      meta: {
        breadcrumb: [
          {name: 'Home', link: 'home'},
          {name: 'Datasets'}
        ]
      },
      title: 'Datasets'
    },
    {
      path: '/404',
      name: '404',
      component: () => import(/* webpackChunkName: "notFound" */ './views/NotFound.vue'),
      meta: {
        breadcrumb: [
          {name: 'Home', link: 'home'},
          {name: '404'}
        ]
      }
    },
    {
      path: '*',
      redirect: '/404'
    }
  ]
})
