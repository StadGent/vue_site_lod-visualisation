import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        menu: 'Home'
      }
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/datasets',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "datasets" */ './views/Datasets.vue'),
      meta: {
        menu: 'Datasets',
        title: 'Datasets',
      },
      children: [
        {
          path: '',
          component: () => import(/* webpackChunkName: "datasets" */ './views/Datasets_index.vue'),
          name: 'datasets_index',
          meta: {
            title: 'Datasets',
            breadcrumb: [
              {name: 'Home', link: 'home'},
              {name: 'Datasets'}
            ]
          }
        },
        {
          path: ':id',
          name: 'datasets_show',
          component: () => import(/* webpackChunkName: "datasets" */ './views/Datasets_show.vue'),
          meta: {
            title: 'Detail',
            breadcrumb: [
              {name: 'Home', link: 'home'},
              {name: 'Datasets', link: 'datasets_index'},
              {name: ':id'}
            ]
          }
        },
        {
          path: 'index',
          redirect: './'
        },
      ]
    },
    {
      path: '/query',
      name: 'query',
      component: () => import(/* webpackChunkName: "query" */ './views/Query.vue'),
      meta: {
        menu: 'Query editor',
        title: 'Query',
        breadcrumb: [
          {name: 'Home', link: 'home'},
          {name: 'Query'}
        ]
      }
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
      component: () => import(/* webpackChunkName: "data-resource" */ './views/Data-resource.vue'),
      meta: {
        title: 'Detail'
      }
    }
  ]
})
