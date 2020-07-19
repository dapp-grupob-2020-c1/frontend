import { getCurrentUserRequest } from "../api/userRequests";
import {
  getShopsRequest,
  createShopRequest,
  deleteShopRequest,
  editShopRequest
} from "../api/shopRequests";

export default {
  state: {
    locations: [],
    shops: [],
    name: "",
    email: "",
    imgUrl: null,
    provider: null,
    shoppingList: null,
    typeThresholds: null,
    suggestedTypeThresholds: null,
    totalThreshold: null
  },
  namespaced: true,
  mutations: {
    setUserInformation(state, userInfo) {
      state.locations = userInfo.locations;
      state.shops = userInfo.shops;
      state.name = userInfo.name;
      state.email = userInfo.email;
      state.imgUrl = userInfo.imgUrl;
      state.provider = userInfo.provider;
      state.shoppingList = userInfo.shoppingList;
      state.typeThresholds = userInfo.typeThresholds;
      state.suggestedTypeThresholds = userInfo.suggestedTypeThresholds;
      state.totalThreshold = userInfo.totalThreshold;
    },
    deleteUserInformation(state) {
      state.locations = [];
      state.shops = [];
      state.name = "";
      state.email = "";
      state.imgUrl = null;
      state.provider = null;
      state.shoppingList = null;
      state.typeThresholds = null;
      state.suggestedTypeThresholds = null;
      state.totalThreshold = null;
    },
    setLocations(state, locations) {
      state.locations = locations;
    },
    setShops(state, shops) {
      state.shops = shops;
    }
  },
  actions: {
    async getUserInformation({ commit, rootState }) {
      commit("requests/beginLoading", null, { root: true });
      try {
        const httpClient = rootState.auth.httpClient;
        const userResponse = await getCurrentUserRequest(httpClient);
        commit("setUserInformation", userResponse.data);
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
    async getShops({ commit, rootState }) {
      commit("requests/beginLoading", null, { root: true });
      try {
        const httpClient = rootState.auth.httpClient;
        const getShopsResponse = await getShopsRequest(httpClient);
        commit("setShops", getShopsResponse.data);
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
    async createShop({ commit, dispatch, rootState }, shopInformation) {
      commit("requests/beginLoading", null, { root: true });
      try {
        const httpClient = rootState.auth.httpClient;
        const createShopResponse = await createShopRequest(
          httpClient,
          shopInformation
        );
        console.log(createShopResponse);
        dispatch("messages/showMessage", "user.createShopSuccess", {
          root: true
        });
      } catch (error) {
        commit("requests/setError", null, { root: true });
        dispatch("messages/showErrorMessage", "user.createShopError", {
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
    },
    async editShop({ commit, dispatch, rootState }, shopInformation) {
      commit("requests/beginLoading", null, { root: true });
      try {
        const httpClient = rootState.auth.httpClient;
        const editShopResponse = await editShopRequest(
          httpClient,
          shopInformation
        );
        console.log(editShopResponse);
        dispatch("messages/showMessage", "user.editShopSuccess", {
          root: true
        });
      } catch (error) {
        commit("requests/setError", null, { root: true });
        dispatch("messages/showErrorMessage", "user.editShopError", {
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
    },
    async deleteShop({ commit, dispatch, rootState }, shopId) {
      commit("requests/beginLoading", null, { root: true });
      try {
        const httpClient = rootState.auth.httpClient;
        const deleteShopResponse = await deleteShopRequest(httpClient, shopId);
        console.log(deleteShopResponse);
        dispatch("messages/showMessage", "user.deleteShopSuccess", {
          root: true
        });
      } catch (error) {
        commit("requests/setError", null, { root: true });
        dispatch("messages/showErrorMessage", "user.deleteShopError", {
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
    },
    addLocation({ state, commit }, newLocation) {
      const updatedLocations = [newLocation, ...state.locations];
      commit("setLocations", updatedLocations);
    },
    addShop({ state, commit }, newShop) {
      const updatedShops = [newShop, ...state.shops];
      commit("setShops", updatedShops);
    }
  }
};
