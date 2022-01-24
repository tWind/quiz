import router from '../router';
import store from '@/store';

export const errorHandler = (error) => {
  store.dispatch('errors/setError', error);
  router.push({ name: 'error' });
}