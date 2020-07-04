import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import multiguard from "vue-router-multiguard";
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

const onlySeller = (to, from, next) => {
  if (store.state.auth.type === "seller") {
    next();
  } else {
    console.log("ruta sólo disponible para seller");
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
    path: "/dashboard",
    name: "Dashboard",
    beforeEnter: requiresAuth,
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue")
  },
  {
    path: "/search",
    name: "Search",
    beforeEnter: multiguard([requiresAuth, onlyBuyer]),
    component: () =>
      import(/* webpackChunkName: "search" */ "../views/buyer/Search.vue")
  },
  {
    path: "/cart",
    name: "Cart",
    beforeEnter: multiguard([requiresAuth, onlyBuyer]),
    component: () =>
      import(/* webpackChunkName: "cart" */ "../views/ShoppingCart.vue")
  },
  {
    path: "/createProduct",
    name: "CreateProduct",
    beforeEnter: multiguard([requiresAuth, onlySeller]),
    component: () =>
      import(
        /* webpackChunkName: "createProduct" */ "../views/seller/products/Create.vue"
      )
  },
  {
    path: "/uploadProducts",
    name: "UploadProducts",
    beforeEnter: multiguard([requiresAuth, onlySeller]),
    component: () =>
      import(
        /* webpackChunkName: "uploadProducts" */ "../views/seller/products/Upload.vue"
      )
  }
];

const router = new VueRouter({
  routes
});

export default router;
