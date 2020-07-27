const axios = require("axios").default;
import router from "../router";
import { loginRequest, registerRequest } from "../api/authRequests";

export default {
  namespaced: true,
  state: {
    authenticated: false,
    token: null,
    httpClient: null,
  },
  mutations: {
    setLogin(state, token) {
      state.authenticated = true;
      state.token = token;
      state.httpClient = axios.create({
        baseURL: process.env.VUE_APP_API_URL,
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    },
    setLogout(state) {
      state.authenticated = false;
      state.token = null;
      state.httpClient = null;
    },
  },
  actions: {
    async login({ commit, dispatch }, userInformation) {
      commit("requests/beginLoading", null, { root: true });
      try {
        const response = await loginRequest(userInformation);
        commit("setLogin", response.data.accessToken);
        dispatch("messages/showMessage", "login.loginSucceeded", {
          root: true,
        });
        router.push("/dashboard");
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
    async register({ commit, dispatch }, userInformation) {
      commit("requests/beginLoading", null, { root: true });
      try {
        await registerRequest(userInformation);
        dispatch("messages/showMessage", "register.registerSucceeded", {
          root: true,
        });
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
    logout({ commit, dispatch }) {
      commit("setLogout");
      commit("user/deleteUserInformation", null, { root: true });
      dispatch("messages/showMessage", "login.logoutSucceeded", {
        root: true,
      });
      router.replace("/");
    },
  },
};
