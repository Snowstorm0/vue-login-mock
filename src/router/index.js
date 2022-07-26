import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "../views/HomePage";

Vue.use(VueRouter)


const routes = [
  {
    path: '/home',
    name: '首页',
    component: HomePage
  },
   {
    path: '/login',
    name: '登录',
    component: () => import(/* webpackChunkName: "user" */ '../views/login.vue')
   }
]

const router = new VueRouter({
  routes
})

export default router


