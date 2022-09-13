import product from "@/data/product";

const state = () => ({
  init: true,
  productList: [],
});
const getters = {};
const mutations = {
  addProduct(state, product) {
    state.productList.push(product);
  },
  updProduct() {},
  delProduct(state, product_id) {
    state.productList.splice(product_id, 1);
  },
  setProduct(state, products) {
    if (state.init) {
      state.productList = products;  
    } else {
      state.init = false;
    }  
  },
};
const actions = {
  addProduct({ commit }, product) {
    commit("addProduct", product);
  },
  updProduct() {},
  delProduct({ commit }, product_id) {
    commit("delProduct", product_id);
  },
  setProduct({ commit }) {
    const products = product.getProducts();
    commit("setProduct", products);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
