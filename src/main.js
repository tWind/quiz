import Vue from 'vue';
import App from './App.vue';
import VueSocketIO from 'vue-socket.io';
import router from './router';
import store from './store';

import VModal from 'vue-js-modal';

import './scss/main.scss';

Vue.config.productionTip = false;

Vue.use(VModal);

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'https://xn--90af3acbk.xn----8sbemlhagk1bvheo2i.xn--p1ai',
    options: { secure: true, rejectUnauthorized: false }, //options object is Optional
  })
);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
