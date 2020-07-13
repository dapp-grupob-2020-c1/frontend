export default {
  namespaced: true,
  state: {
    locations: [],
    shops: [],
    name: null,
    email: null,
    imgUrl: null,
    provider: null
  },
  mutations: {
    deleteUserInfo(state) {
      state.locations = [];
      state.shops = [];
      state.name = null;
      state.email = null;
      state.imgUrl = null;
      state.provider = null;
    },
    setUserInfo(state, { locations, shops, name, email, imgUrl, provider }) {
      state.locations = locations;
      state.shops = shops;
      state.name = name;
      state.email = email;
      state.imgUrl = imgUrl;
      state.provider = provider;
    },
    setLocations(state, locations) {
      state.locations = locations;
    },
    setShops(state, shops) {
      state.shops = shops;
    }
  },
  actions: {
    addLocation({ state, commit }, newLocation) {
      const updatedLocations = [newLocation, ...state.locations];
      commit("setLocations", updatedLocations);
    }
  }
};
