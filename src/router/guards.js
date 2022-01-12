import store from '@/store';

const ACTIONS_MAIN = [
  'quiz/loadAppInfo',
];

const ACTIONS_BY_ROUTE = {
  thanks: [
    'quiz/loadSelectionLead',
  ],
}

async function dispatchToStore(actions, params) {
  await Promise.all(actions.map(a => store.dispatch(a, params)));
}

/**
 * Route Guard. Загружает данные обязательные для всех страниц сайта.
 */
 async function loadMainData(to, from, next) {
  try {
    await dispatchToStore(ACTIONS_MAIN, to.params);
    return next();
  } catch (error) {
    return next(error);
  }
}

/**
 * Route Guard, загружает данные необходимые для данной страницы.
 */
 async function loadPageData(to, from, next) {
  try {
    const storeActions = ACTIONS_BY_ROUTE[to.name];
    await dispatchToStore(storeActions, to.params);
    return next();
  } catch (error) {
    return next(error);
  }
}

export default {
  loadMainData,
  loadPageData,
}

