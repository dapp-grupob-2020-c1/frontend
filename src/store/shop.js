export default {
  namespaced: true,
  state: {
    selectedId: null,
    selectedShop: null
  },
  mutations: {
    setSelected(state, selectedShop) {
      state.selectedShop = selectedShop;
    }
  },
  actions: {
    selectShop() {},
    updateSelected() {}
  }
};
