import router from "../router";
import { loginRequest, registerRequest } from "../api/authRequests";

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
    async login({ commit }, userInformation) {
      commit("requests/beginLoading", null, { root: true });
      try {
        const response = await loginRequest(userInformation);
        commit("setLogin", response.data.accessToken);
        await router.push("/dashboard");
      } catch (error) {
        commit("requests/setError", null, { root: true });
        // handle different error types
        if (error.response) {
          commit("requests/setError", "app.responseError", { root: true });
        } else if (error.request) {
          commit("requests/setError", "app.connectionError", { root: true });
        }
      } finally {
        commit("requests/endLoading", null, { root: true });
      }
    },
    async register({ commit }, userInformation) {
      commit("requests/beginLoading", null, { root: true });
      try {
        await registerRequest(userInformation);
        await router.push("/login");
      } catch (error) {
        commit("requests/setError", null, { root: true });
        // handle different error types
        if (error.response) {
          commit("requests/setError", "app.responseError", { root: true });
        } else if (error.request) {
          commit("requests/setError", "app.connectionError", { root: true });
        }
      } finally {
        commit("requests/endLoading", null, { root: true });
      }
    },
    logout({ commit }) {
      commit("setLogout");
      router.replace("/");
    }
  }
};
