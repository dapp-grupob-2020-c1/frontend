export default {
  namespaced: true,
  state: {
    loading: false,
    error: false,
    errorMessage: ""
  },
  mutations: {
    beginLoading(state) {
      state.loading = true;
      state.error = false;
      state.errorMessage = "";
    },
    endLoading(state) {
      state.loading = false;
    },
    setError(state, errorMessage) {
      state.error = true;
      state.errorMessage = errorMessage;
    }
  }
};
