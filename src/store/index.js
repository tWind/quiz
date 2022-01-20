import Vue from 'vue';
import Vuex from 'vuex';

import quiz from './modules/quiz';
import errors from './modules/errors';


Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    quiz: quiz,
    errors: errors,
  },
});