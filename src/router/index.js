import Vue from "vue";
import VueRouter from "vue-router";
import multiguard from "vue-router-multiguard";
import Home from "../views/Home.vue";
import store from "../store/index";

Vue.use(VueRouter);

const requiresAuth = (to, from, next) => {
  if (store.getters["auth/isAuthenticated"]) {
    next();
  } else {
    next("/login");
  }
};

const onlyBuyer = (to, from, next) => {
  if (store.state.auth.type === "buyer") {
    next();
  } else {
    console.log("ruta sólo disponible para buyer");
    next("/login");
  }
};

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
    path: "/dashboard",
    name: "Dashboard",
    beforeEnter: requiresAuth,
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue")
  },
  {
    path: "/cart",
    name: "Cart",
    beforeEnter: multiguard([requiresAuth, onlyBuyer]),
    component: () =>
      import(/* webpackChunkName: "cart" */ "../views/ShoppingCart.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
