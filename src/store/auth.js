import router from "../router";

export default {
  namespaced: true,
  state: {
    name: null,
    type: "" // null, buyer, seller
  },
  mutations: {
    setLogin(state, { name, type }) {
      state.name = name;
      state.type = type;
    },
    setLogout(state) {
      state.name = null;
      state.type = "";
    }
  },
  actions: {
    login({ commit }, payload) {
      console.log(payload);
      commit("setLogin", payload);
      router.push("/dashboard");
    },
    logout({ commit }) {
      commit("setLogout");
      router.replace("/");
    }
  },
  getters: {
    isAuthenticated(state) {
      return !!state.type;
    }
  }
};
