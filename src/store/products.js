import { getShopRequest } from "../api/shopRequests";
import {
  createManyProductsRequest,
  createProductRequest,
  deleteProductRequest,
} from "../api/productsRequests";

export default {
  state: {
    products: [],
  },
  namespaced: true,
  mutations: {
    setProducts(state, productsList) {
      state.products = [...productsList];
    },
  },
  actions: {
    async getShopProducts({ commit, dispatch, rootState }, shopId) {
      commit("requests/beginLoading", null, { root: true });
      try {
        const httpClient = rootState.auth.httpClient;
        const getShopResponse = await getShopRequest(httpClient, shopId);
        commit("setProducts", getShopResponse.data.products);
      } catch (error) {
        commit("requests/setError", null, { root: true });
        dispatch("messages/showErrorMessage", "user.getShopProductsError", {
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
    async createProduct({ commit, dispatch, rootState }, productInfo) {
      console.log("createProduct action", productInfo);
      commit("requests/beginLoading", null, { root: true });
      try {
        const httpClient = rootState.auth.httpClient;
        const createProductResponse = await createProductRequest(
          httpClient,
          productInfo
        );
        console.log(createProductResponse);
        dispatch("messages/showMessage", "user.createProductSuccess", {
          root: true,
        });
      } catch (error) {
        commit("requests/setError", null, { root: true });
        dispatch("messages/showErrorMessage", "user.createProductError", {
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
    async createManyProducts({ commit, dispatch, rootState }, productsInfo) {
      console.log("createManyProducts action", productsInfo);
      commit("requests/beginLoading", null, { root: true });
      try {
        const httpClient = rootState.auth.httpClient;
        const createProductResponse = await createManyProductsRequest(
          httpClient,
          productsInfo
        );
        console.log(createProductResponse);
        dispatch("messages/showMessage", "user.createManyProductsSuccess", {
          root: true,
        });
      } catch (error) {
        commit("requests/setError", null, { root: true });
        dispatch("messages/showErrorMessage", "user.createManyProductsError", {
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
    async deleteProduct(
      { commit, dispatch, rootState },
      { shopId, productId }
    ) {
      console.log("deleteProduct action", productId);
      commit("requests/beginLoading", null, { root: true });
      try {
        const httpClient = rootState.auth.httpClient;
        const createProductResponse = await deleteProductRequest(httpClient, {
          shopId,
          productId,
        });
        console.log(createProductResponse);
        dispatch("messages/showMessage", "user.deleteProductSuccess", {
          root: true,
        });
      } catch (error) {
        commit("requests/setError", null, { root: true });
        dispatch("messages/showErrorMessage", "user.deleteProductError", {
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
  // getters: {
  //   findShop: state => shopId => {
  //     console.log("user/getters/findShop");
  //     return state.shops.find(shop => shop.id == shopId);
  //   }
  // }
};
