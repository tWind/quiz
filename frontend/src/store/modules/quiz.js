import api from '@/common/api';
import constants from '@/constants';

export default {
  namespaced: true,
  state: {
    info: {},
    variants: [],
  },
  mutations: {
    setVariants(state, payload) {
      state.variants = payload;
    },
    setInfo(state, payload) {
      state.info = payload;
    }
  },
  actions: {
    async loadQuestions(store, params) {
      const response = await api.get(constants.API_QUIZ_URL, params);

      const info = {
        'quiz-id': response.data.data.BASE.QUIZ_ID,
        'utm': response.data.data.BASE.UTM_CODE,
        'city-id': response.data.data.BASE.CITY_ID,
        'district-ids': response.data.data.BASE.DISTRICT_IDS,
      }
  
      store.commit('setVariants', response.data.data.QUIZ);
      store.commit('setInfo', info);
    },
    async loadSelectionLead(store, params) {
      const settings = {
        'privacy': 'privacy',
      }

      const options = Object.assign(settings, params, store.getters.getInfo);

      const response = await api.get(constants.API_COMPILATION_URL, options);
      console.log(response);
    }
  },
  getters: {
    getVariants(state) {
      return state.variants;
    },
    getInfo(state) {
      return state.info;
    }
  },
};