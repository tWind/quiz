export default {
  namespaced: true,
  state: {
    error: null
  },
  mutations: {
    setError(state, payload) {
      state.error = payload;
    }
  },
  getters: {
    error(state) {
      return state.error;
    }
  },
  actions: {
    setError(store, error) {
      store.commit('setError', error);
    }
  }
};