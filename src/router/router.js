import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from '../components/HelloWorld.vue'
import HomePage from '../views/HomePage.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
      { path: '/hello', component: HelloWorld },
      { path: '/', component: HomePage }
  ]
});