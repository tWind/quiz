import api from '@/common/api';
import constants from '@/constants';

export default {
  namespaced: true,
  state: {
    questions: [],
  },
  mutations: {
    setQuestions(state, payload) {
      state.questions = payload;
    },
  },
  actions: {
    async loadQuestions(store, params) {
      const data = await api.get(constants.API_URL, params);
      
  
      store.commit('setQuestions', data.QUIZ);
    },
  },
  getters: {
    getQuestions(state) {
      return state.questions;
    },
  },
};