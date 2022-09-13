import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from '../components/HelloWorld.vue'
import HomePage from '../views/HomePage.vue'
import Information from '../components/Information.vue'
import register from '../components/register.vue'
import ProductList from '../views/ProductList.vue'
import AddProduct from '../views/AddProductPage.vue';

export const router = createRouter({
      history: createWebHistory(),
      routes: [
            { path: '/hello', component: HelloWorld },
            { path: '/', component: HomePage },
            { path: '/information', component: Information },
            { path: '/register', component: register },
            { path: '/product', component: ProductList },
            { path: '/add', component: AddProduct}
      ]
});