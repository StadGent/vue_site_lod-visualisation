import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';

const routes = [
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
            { name: 'Home', link: 'home' },
            { name: 'Datasets' }
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
            { name: 'Home', link: 'home' },
            { name: 'Datasets', link: 'datasets_index' },
            { name: ':id' }
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
        { name: 'Home', link: 'home' },
        { name: 'Query' }
      ]
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import(/* webpackChunkName: "notFound" */ './views/NotFound.vue'),
    meta: {
      breadcrumb: [
        { name: 'Home', link: 'home' },
        { name: '404' }
      ]
    }
  },
  {
    path: '/:catchAll(.*)',
    component: () => import(/* webpackChunkName: "data-resource" */ './views/Data-resource.vue'),
    meta: {
      title: 'Detail'
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { left: 0, top: 0 };
  }
});

export default router;
