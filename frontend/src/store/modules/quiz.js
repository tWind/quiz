import api from '@/common/api';
import constants from '@/constants';

export default {
  namespaced: true,
  state: {
    info: {},
    variants: [],
    text: {},
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
    }
  },
  actions: {
    async loadAppInfo(store, params) {
      const response = await api.get(constants.API_QUIZ_URL, params),
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
          }
          // "TWO_SCREEN_HEADER": "Проверяем все новостройки",
          // "TWO_SCREEN_TEXT": "Из нашей базы удаляются новостройки, которые затягивают сроки строительства, имеют плохие отзывы жильцов или прецеденты обмана при заключении договора. Такие объекты не попадут к вам в подборку.",
          // "TWO_SCREEN_COUNTER_1_HEADER": "1 340",
          // "TWO_SCREEN_COUNTER_1_TEXT": "квартир в продаже",
          // "TWO_SCREEN_COUNTER_2_HEADER": "13 450",
          // "TWO_SCREEN_COUNTER_2_TEXT": "новостроек в базе",
          // "THREE_SCREEN_HEADER": "Пришлем предложения от крупных застройщиков",
          // "THREE_SCREEN_TEXT": "Мы напрямую сотрудничаем только с надежными, юридически чистыми застройщиками. Каждый день получаем актуальную информацию об изменении цен, скидках и выгодных предложениях в новостройках.",
          // "PHONE_NUMBER_TEXT": "+7 (977) 000-81-74",
          // "PHONE_NUMBER_CLEAR": "79770008174",
          // "SEND_BTN_TEXT": "ПОЛУЧИТЬ ПОДБОРКУ",
          // "FORM_HEADER": "Мы нашли квартиры, которые вам подходят",
          // "FORM_SUBHEADER": "Укажите ваш личный номер телефона — на него вы получите подборку квартир",
          // "PRIVACY_LINK": "https://www.granelle.ru/",
          // "THANKS_TITLE": "Спасибо",
          // "THANKS_TEXT": "Менеджер свяжется с вами и подготовит подборку по вашим параметрам",
          // "ORDERS_IDS": "8759",
          // "CITY_ID": "69",
          // "UTM_CODE": "pehra",
          // "PAGE_TITLE": "Сайт подбора недвижимости",
          // "PAGE_DESCRIPTION": "Сайт подбора недвижимости",
          // "COUNTERS_CODES_HEADER": "console.log('Header scripts!');",
          // "COUNTERS_CODES_FOOTER": "console.log('Footer scripts!');",
          // "BTN_START_EVENT": "console.log('Start button!');",
          // "BTN_FINISH_EVENT": "console.log('Finish button!');",
          // "BTN_PRIMARY_COLOR": "#2e8906",
          // "BTN_PRIMARY_COLOR_HOVER": "#379b08",
          // "BTN_SECONDARY_COLOR": "#b1b1b1",
          // "BTN_SECONDARY_COLOR_HOVER": "#b1b1b1",
          // "CHECKBOX_COLOR": "#2e8906",
      };

      const info = {
        'quiz-id': baseSettings.QUIZ_ID,
        'utm': baseSettings.UTM_CODE,
        'city-id': baseSettings.CITY_ID,
        'district-ids': baseSettings.DISTRICT_IDS,
      }
  
      store.commit('setVariants', quizSettings);
      store.commit('setInfo', info);
      store.commit('setText', text);
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
    },
    appText(state) {
      return state.text;
    }
  },
};