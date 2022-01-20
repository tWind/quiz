import router from '../router';
import store from '@/store';

export const errorHandler = (error) => {
  console.log(error.data.error);
  store.dispatch('errors/setError', error.data.error);
  router.push({ name: 'error' });
}