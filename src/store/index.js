import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isAuthenticated: true,
    user: {
      name: "Buyer",
      type: "buyer"
    },
    customer: {
      locations: [
        {
          address: "Calle Falsa 123",
          lat: -34.7764245,
          long: -58.246316
        },
        {
          address: "Calle Falsa 456",
          lat: -34.7553747,
          long: -58.3122063
        }
      ]
    },
    seller: {},
    availableShopCategories: [
      "FoodsAndDrinks",
      "OfficeSupplies",
      "ElectronicsAndHomeAppliances",
      "BooksMoviesAndGames",
      "Services",
      "Bazaar",
      "PetsAndAnimals",
      "VehiclesAndAccessories",
      "Clothing",
      "Pharmacy"
    ],
    availablePaymentMethods: ["CASH", "MERCADOPAGO", "DEBIT", "CREDIT"]
  },
  mutations: {
    setUser(state, newUser) {
      state.user = newUser;
    },
    setAuth(state, authState) {
      state.isAuthenticated = authState;
    }
  },
  actions: {
    login() {},
    logout({ commit }) {
      commit("setAuth", false);
      commit("setUser", {});
    }
  },
  modules: {}
});
