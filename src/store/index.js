import Vue from "vue";
import Vuex from "vuex";

// Modules
import auth from "./auth";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
  mutations: {},
  actions: {},
  modules: {
    auth,
  }
});
