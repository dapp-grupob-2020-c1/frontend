import router from "../router";

export default {
  namespaced: true,
  state: {
    name: null,
    type: "" // null, buyer, seller
  },
  mutations: {
    setLogin(state, { name, type }) {
      console.log("auth/setLogin mutation", { name, type });
      state.name = name;
      state.type = type;
    },
    setLogout(state) {
      console.log("auth/setLogout mutation");
      state.name = null;
      state.type = "";
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
  },
  getters: {
    isAuthenticated(state) {
      console.log("auth/isAuthenticated getter");
      return !!state.type;
    }
  }
};
