import Vue from "vue";
import Vuex from "vuex";

// Modules
import auth from "./auth";
import buyer from "./buyer";
import seller from "./seller";

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
    availablePaymentMethods: ["CASH", "MERCADOPAGO", "DEBIT", "CREDIT"]
  },
  mutations: {},
  actions: {},
  modules: {
    auth,
    buyer,
    seller
  }
});
