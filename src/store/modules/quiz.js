import api from '@/common/api';
import constants from '@/constants';

export default {
  namespaced: true,
  state: {
    info: {},
    variants: [],
    text: {},
    requestInfo: null,
    compilation: [],
    socketChannelId: '',
  },
  mutations: {
    setVariants(state, payload) {
      state.variants = payload;
    },
    setInfo(state, payload) {
      state.info = payload;
    },
    setText(state, payload) {
      state.text = payload;
    },
    setCompilation(state, payload) {
      state.compilation = payload;
    },
    setSocketChannelId(state, payload) {
      state.socketChannelId = payload;
    },
    setRequestInfo(state, payload) {
      state.requestInfo = payload;
    },
  },
  actions: {
    async loadAppInfo(store, data) {
      const response = await api.get(`${constants.API_QUIZ_URL}${data.query.utm}`, data.params),
        baseSettings = response.data.data.BASE,
        quizSettings = response.data.data.QUIZ;

      const text = {
          header: {
            logo: baseSettings.HEADER_LOGO_TEXT,
            sub: baseSettings.HEADER_LOGO_SUBTEXT,
            main: baseSettings.HEADER,
          },
          button: {
            start: baseSettings.START_BTN_TEXT,
            next: baseSettings.NEXT_BTN_TEXT,
            prev: baseSettings.PREV_BTN_TEXT,
            send: baseSettings.SEND_BTN_TEXT,
          },
          form: {
            header: baseSettings.FORM_HEADER,
            subheader: baseSettings.FORM_SUBHEADER,
          },
          banner: {
            second: {
              header: baseSettings.TWO_SCREEN_HEADER,
              text: baseSettings.TWO_SCREEN_TEXT,
            },
            third: {
              header: baseSettings.THREE_SCREEN_HEADER,
              text: baseSettings.THREE_SCREEN_TEXT,
            },
          },
          counters: [
            {
              number: baseSettings.TWO_SCREEN_COUNTER_1_HEADER,
              title: baseSettings.TWO_SCREEN_COUNTER_1_TEXT,
            },
            {
              number: baseSettings.TWO_SCREEN_COUNTER_2_HEADER,
              title: baseSettings.TWO_SCREEN_COUNTER_2_TEXT,
            },
          ],
          phone: {
            text: baseSettings.PHONE_NUMBER_TEXT,
            clear: baseSettings.PHONE_NUMBER_CLEAR,
          },
          thanks: {
            title: baseSettings.THANKS_TITLE,
            text: baseSettings.THANKS_TEXT,
          },
          link: {
            privacy: baseSettings.PRIVACY_LINK,
          }
          // "PAGE_TITLE": "Сайт подбора недвижимости",
          // "PAGE_DESCRIPTION": "Сайт подбора недвижимости",
          // "BTN_PRIMARY_COLOR": "#2e8906",
          // "BTN_PRIMARY_COLOR_HOVER": "#379b08",
          // "BTN_SECONDARY_COLOR": "#b1b1b1",
          // "BTN_SECONDARY_COLOR_HOVER": "#b1b1b1",
          // "CHECKBOX_COLOR": "#2e8906",
      };

      const info = {
        'quiz-id': baseSettings.QUIZ_ID,
        'utm-code': baseSettings.UTM_CODE,
        'city-id': baseSettings.CITY_ID,
      }
  
      store.commit('setVariants', quizSettings);
      store.commit('setInfo', info);
      store.commit('setText', text);
    },
    async loadSelectionLead(store) {
      const options = Object.assign(store.state.requestInfo, store.getters.getInfo);

      const response = await api.get(constants.API_COMPILATION_URL, options);

      console.log(response.data.data.compilation);

      store.commit('setCompilation', response.data.data.compilation);
      store.commit('setSocketChannelId', response.data.data.socket_ch);
    }
  },
  getters: {
    quizVariants(state) {
      return state.variants;
    },
    getInfo(state) {
      return state.info;
    },
    appText(state) {
      return state.text;
    },
    objectsCompilation(state) {
      return state.compilation;
    },
    socketChannel(state) {
      return state.socketChannelId;
    }
  },
};