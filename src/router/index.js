import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index";

Vue.use(VueRouter);

const requiresAuth = (to, from, next) => {
  console.log(store.state);
  if (store.state.auth.authenticated) {
    next();
  } else {
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
    beforeEnter: requiresAuth,
    component: () =>
      import(/* webpackChunkName: "search" */ "../views/buyer/Search.vue")
  },
  {
    path: "/createLocation",
    name: "CreateLocation",
    beforeEnter: requiresAuth,
    component: () =>
      import(
        /* webpackChunkName: "createLocation" */ "../views/buyer/locations/Create.vue"
      )
  },
  {
    path: "/cart",
    name: "Cart",
    beforeEnter: requiresAuth,
    component: () =>
      import(/* webpackChunkName: "cart" */ "../views/ShoppingCart.vue")
  },
  {
    path: "/createProduct",
    name: "CreateProduct",
    beforeEnter: requiresAuth,
    component: () =>
      import(
        /* webpackChunkName: "createProduct" */ "../views/seller/products/Create.vue"
      )
  },
  {
    path: "/uploadProducts",
    name: "UploadProducts",
    beforeEnter: requiresAuth,
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
