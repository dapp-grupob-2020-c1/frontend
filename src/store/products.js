import { getShopRequest } from "../api/shopRequests";

export default {
  state: {
    products: []
  },
  namespaced: true,
  mutations: {
    setProducts(state, productsList) {
      state.products = [...productsList];
    }
  },
  actions: {
    async getShopProducts({ commit, dispatch, rootState }, shopId) {
      commit("requests/beginLoading", null, { root: true });
      try {
        const httpClient = rootState.auth.httpClient;
        const getShopResponse = await getShopRequest(httpClient, shopId);
        commit("setProducts", getShopResponse.data.products);
        dispatch("messages/showMessage", "user.getShopProductsSuccess", {
          root: true
        });
      } catch (error) {
        commit("requests/setError", null, { root: true });
        dispatch("messages/showErrorMessage", "user.getShopProductsError", {
          root: true
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
    }
  }
  // getters: {
  //   findShop: state => shopId => {
  //     console.log("user/getters/findShop");
  //     return state.shops.find(shop => shop.id == shopId);
  //   }
  // }
};
