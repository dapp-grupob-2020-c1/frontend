import { getActiveCartRequest, getOldCartsRequest } from "../api/cartRequests";

export default {
  state: {
    active: null,
    history: [],
  },
  namespaced: true,
  mutations: {
    setActiveCart(state, activeCart) {
      state.active = activeCart;
    },
    setHistory(state, history) {
      state.history = history;
    },
  },
  actions: {
    async getActiveShoppingCart({ commit, dispatch, rootState }) {
      commit("requests/beginLoading", null, { root: true });
      try {
        const httpClient = rootState.auth.httpClient;
        const getActiveCartResponse = await getActiveCartRequest(httpClient);
        commit("setActiveCart", getActiveCartResponse.data);
      } catch (error) {
        commit("requests/setError", null, { root: true });
        dispatch(
          "messages/showErrorMessage",
          "cart.getActiveShoppingCartError",
          {
            root: true,
          }
        );
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
    async getOldCarts({ commit, dispatch, rootState }) {
      commit("requests/beginLoading", null, { root: true });
      try {
        const httpClient = rootState.auth.httpClient;
        const getOldCartsResponse = await getOldCartsRequest(httpClient);
        commit("setHistory", getOldCartsResponse.data);
      } catch (error) {
        commit("requests/setError", null, { root: true });
        dispatch(
          "messages/showErrorMessage",
          "cart.getActiveShoppingCartError",
          {
            root: true,
          }
        );
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
  },
};
