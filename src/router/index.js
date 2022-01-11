import Vue from 'vue';
import Router from 'vue-router';

import guards from './guards';

import IndexView from '@/views/IndexView';
import ThanksView from '@/views/ThanksView';

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
    },
  ],
});

export default router;