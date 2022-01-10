import store from '@/store';

const ACTIONS_MAIN = [
  'quiz/loadAppInfo',
];

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

export default {
  loadMainData,
}

