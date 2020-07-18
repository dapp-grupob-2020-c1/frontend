import Vue from "vue";
import Vuex from "vuex";

// Modules
import auth from "./auth";
import user from "./user";
import requests from "./requests";
import messages from "./messages";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
    availableProductCategories: [
      "FoodsAndDrinks",
      "OfficeSupplies",
      "ElectronicsAndHomeAppliances",
      "BooksMoviesAndGames",
      "Services",
      "Bazaar",
      "PetsAndAnimals",
      "VehiclesAndAccesories",
      "Clothing",
      "Pharmacy"
    ],
    availablePaymentMethods: ["CASH", "MERCADOPAGO", "DEBIT", "CREDIT"]
  },
  mutations: {},
  actions: {},
  modules: {
    requests,
    messages,
    auth,
    user
  }
});
