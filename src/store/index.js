import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: false,
    user: {
      name: null,
      type: null
    },
    customer: {
      locations: []
    },
    seller: {}
  },
  mutations: {
    setUser(state, newUser) {
      state.user = newUser;
    },
    setAuth(state, authState) {
      state.isAuthenticated = authState;
    }
  },
  actions: {},
  modules: {}
});
