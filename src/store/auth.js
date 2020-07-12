import router from "../router";

export default {
  namespaced: true,
  state: {
    authenticated: false,
    token: null
  },
  mutations: {
    setLogin(state, token) {
      console.log("auth/setLogin mutation", token);
      state.authenticated = true;
      state.token = token;
    },
    setLogout(state) {
      console.log("auth/setLogout mutation");
      state.authenticated = false;
      state.token = null;
    }
  },
  actions: {
    login({ commit }, payload) {
      console.log("auth/login action", payload);
      commit("setLogin", payload);
      router.push("/dashboard");
    },
    logout({ commit }) {
      console.log("auth/logout action");
      commit("setLogout");
      router.replace("/");
    }
  }
};
