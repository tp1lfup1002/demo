import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from '../components/HelloWorld.vue';
import HomePage from '../views/HomePage.vue';
import ProductList from '../views/ProductList.vue';
import AddProduct from '../views/AddProductPage.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
      { path: '/hello', component: HelloWorld },
      { path: '/', component: HomePage },
      { path: '/product', component: ProductList},
      { path: '/add', component: AddProduct}
  ]
});