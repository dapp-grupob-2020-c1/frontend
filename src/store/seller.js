export default {
  namespaced: true,
  state: {
    products: [],
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
    ],
    operations: []
  },
  mutations: {
    addProduct(state, product) {
      console.log("seller/addProduct mutation", product);
      state.products.push(product);
    }
  },
  actions: {
    addProduct({ commit }, product) {
      console.log("seller/addProduct action", product);
      commit("addProduct", product);
    }
  },
  getters: {}
};
