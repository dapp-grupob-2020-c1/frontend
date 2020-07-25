import {
  addProductRequest,
  createCartRequest,
  deleteProductFromCartRequest,
  getActiveCartRequest,
  getOldCartsRequest,
} from "../api/cartRequests";
import { searchProductsRequest } from "../api/productsRequests";
import { getShopRequest } from "../api/shopRequests";

export default {
  state: {
    active: null,
    activeStores: null,
    history: [],
    searchResults: [],
  },
  namespaced: true,
  mutations: {
    setActiveCart(state, activeCart) {
      state.active = activeCart;
    },
    setActiveStores(state, activeStores) {
      state.activeStores = activeStores;
    },
    setHistory(state, history) {
      state.history = history;
    },
    setSearchResults(state, searchResults) {
      state.searchResults = searchResults;
    },
  },
  actions: {
    async getActiveShoppingCart({ commit, dispatch, rootState }) {
      commit("requests/beginLoading", null, { root: true });
      try {
        const httpClient = rootState.auth.httpClient;
        const getActiveCartResponse = await getActiveCartRequest(httpClient);
        commit("setActiveCart", getActiveCartResponse.data);
        dispatch("getActiveShops");
      } catch (error) {
        // ignore error!
      } finally {
        commit("requests/endLoading", null, { root: true });
      }
    },
    async getActiveShops({ commit, dispatch, getters, rootState }) {
      commit("requests/beginLoading", null, { root: true });
      try {
        const shopsList = getters["getActiveCartShopsList"];
        console.log("getActiveShops List: ", shopsList);
        const httpClient = rootState.auth.httpClient;
        const getShopsRequestList = shopsList.map((shopId) => {
          return getShopRequest(httpClient, shopId);
        });
        const results = await Promise.all(getShopsRequestList);
        console.log("Promise all results: ", results);

        const formattedResults = results.map((current) => {
          return current.data;
        });
        console.log("Formatted results: ", formattedResults);
        commit("setActiveStores", formattedResults);
      } catch (error) {
        // ignore error!
      } finally {
        commit("requests/endLoading", null, { root: true });
      }

      // hago un request para obtener los detalles de cada shop
      // guardo todos los shops en el store
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
    async addProductToCart(
      { commit, dispatch, rootState },
      { productId, amount }
    ) {
      commit("requests/beginLoading", null, { root: true });
      try {
        const httpClient = rootState.auth.httpClient;
        const addProductResponse = await addProductRequest(httpClient, {
          productId,
          amount,
        });
        commit("setActiveCart", addProductResponse.data);
        dispatch("getActiveShops");
      } catch (error) {
        commit("requests/setError", null, { root: true });
        dispatch("messages/showErrorMessage", "cart.addProductToCartError", {
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
    async deleteProductFromCart({ commit, dispatch, rootState }, productId) {
      commit("requests/beginLoading", null, { root: true });
      try {
        const httpClient = rootState.auth.httpClient;
        const deleteProductResponse = await deleteProductFromCartRequest(
          httpClient,
          productId
        );
        commit("setActiveCart", deleteProductResponse.data);
        dispatch("getActiveShops");
      } catch (error) {
        commit("requests/setError", null, { root: true });
        dispatch(
          "messages/showErrorMessage",
          "cart.deleteProductFromCartError",
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
  getters: {
    hasActiveAndFilledCart: (state) => {
      console.log("user/getters/findShop");
      return state.active && state.active.total;
    },
    getActiveCartShopsList: (state) => {
      if (!state.active) {
        return [];
      }
      // use set to avoid repeated
      const set = new Set();
      state.active.entries.forEach((entry) => {
        set.add(entry.product.shopId);
      });
      return Array.from(set.values());
    },
  },
};
