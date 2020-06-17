import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue")
  },
  {
    path: "/search",
    name: "Search",
    component: () =>
      import(/* webpackChunkName: "search" */ "../views/Search.vue")
  },
  {
    path: "/map",
    name: "Map",
    component: () => import(/* webpackChunkName: "about" */ "../views/Map.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
