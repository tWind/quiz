import Vue from 'vue';
import Router from 'vue-router';

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
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: ThanksView,
    },
  ],
});

export default router;