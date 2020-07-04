export default {
  namespaced: true,
  state: {
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
    operations: [],
    searchResults: [],
    shoppingCartItems: []
  },
  mutations: {
    setSearchResults(state, newSearchResults) {
      state.searchResults = newSearchResults;
    },
    addItemToCart(state, cartItem) {
      state.shoppingCartItems.push(cartItem);
    }
  },
  actions: {
    beginSearch({ commit }, payload) {
      console.log("search action", payload);
      setTimeout(() => {
        const mockedSearchResults = [
          {
            id: 1,
            name: "lala",
            price: 123
          },
          {
            id: 2,
            name: "lele",
            price: 234
          },
          {
            id: 3,
            name: "lili",
            price: 345
          }
        ];
        commit("setSearchResults", mockedSearchResults);
      }, 500);
    },
    addItemToCart({ commit }, cartItem) {
      console.log("adding item to cart", cartItem);
      commit("addItemToCart", cartItem);
    }
  },
  getters: {}
};