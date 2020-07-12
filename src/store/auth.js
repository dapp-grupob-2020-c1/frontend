import router from "../router";

export default {
  namespaced: true,
  state: {
    authenticated: false,
    token: null
  },
  mutations: {
    setLogin(state, token) {
      state.authenticated = true;
      state.token = token;
    },
    setLogout(state) {
      state.authenticated = false;
      state.token = null;
    }
  },
  actions: {
    login({ commit }, payload) {
      commit("setLogin", payload);
      router.push("/dashboard");
    },
    logout({ commit }) {
      commit("setLogout");
      router.replace("/");
    }
  }
};
