import {
  createCartRequest,
  getActiveCartRequest,
  getOldCartsRequest,
} from "../api/cartRequests";
import { searchProductsRequest } from "../api/productsRequests";

export default {
  state: {
    active: null,
    history: [],
    searchResults: [],
  },
  namespaced: true,
  mutations: {
    setActiveCart(state, activeCart) {
      state.active = activeCart;
    },
    setHistory(state, history) {
      state.history = history;
    },
    setSearchResults(state, searchResults) {
      state.searchResults = searchResults;
    },
  },
  actions: {
    async getActiveShoppingCart({ commit, rootState }) {
      commit("requests/beginLoading", null, { root: true });
      try {
        const httpClient = rootState.auth.httpClient;
        const getActiveCartResponse = await getActiveCartRequest(httpClient);
        commit("setActiveCart", getActiveCartResponse.data);
      } catch (error) {
        // ignore error!
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
    async createCart({ commit, dispatch, rootState }, locationId) {
      commit("requests/beginLoading", null, { root: true });
      try {
        const httpClient = rootState.auth.httpClient;
        const createCartResponse = await createCartRequest(
          httpClient,
          locationId
        );
        commit("setActiveCart", createCartResponse.data);
      } catch (error) {
        commit("requests/setError", null, { root: true });
        dispatch("messages/showErrorMessage", "cart.createCartError", {
          root: true,
        });
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
    async getSearchProducts({ commit, dispatch, rootState }, searchParams) {
      commit("requests/beginLoading", null, { root: true });
      try {
        const httpClient = rootState.auth.httpClient;
        const searchProductsResponse = await searchProductsRequest(
          httpClient,
          searchParams
        );
        console.log("getSearchProducts response", searchProductsResponse.data);
        commit("setSearchResults", searchProductsResponse.data);
      } catch (error) {
        commit("requests/setError", null, { root: true });
        dispatch("messages/showErrorMessage", "cart.getSearchProductsError", {
          root: true,
        });
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
