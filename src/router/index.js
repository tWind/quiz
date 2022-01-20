import Vue from 'vue';
import Router from 'vue-router';

import guards from './guards';

import IndexView from '@/views/IndexView';
import ThanksView from '@/views/ThanksView';
import ErrorView from '@/views/ErrorView';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView,
      beforeEnter: (to, from, next) => guards.loadMainData(to, from, next),
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: ThanksView,
      beforeEnter: (to, from, next) => guards.loadPageData(to, from, next),
    },
    {
      path: '/error',
      name: 'error',
      component: ErrorView,
    },
    {
      path: '*',
      redirect: { name: 'index' },
    },
  ],
});

export default router;