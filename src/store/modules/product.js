const state = {
  productList: new Map(),
};
const getters = {};
const mutations = {
  addProduct: function (product) {
    state.productList.set(product.id, product);
  },
  updProduct: function () {},
  delProduct: function (product_id) {
    state.productList.delete(product_id);
  },
};
const action = {
  addProduct({ commit }, product) {
    commit("addProduct", product);
  },
  updProduct() {},
  delProduct({ commit }, product_id) {
    commit("delProduct", product_id);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  action,
};
