import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index";

Vue.use(VueRouter);

const requiresAuth = (to, from, next) => {
  if (store.state.auth.authenticated) {
    next();
  } else {
    next("/login");
  }
};

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/oauth2/redirect",
    component: () =>
      import(/* webpackChunkName: "authRedirect" */ "../views/AuthRedirect.vue")
  },
  {
    path: "/login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue")
  },
  {
    path: "/register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue")
  },
  {
    path: "/dashboard",
    beforeEnter: requiresAuth,
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue")
  },
  {
    path: "/search",
    beforeEnter: requiresAuth,
    component: () =>
      import(/* webpackChunkName: "search" */ "../views/Search.vue")
  },
  {
    path: "/locations",
    beforeEnter: requiresAuth,
    component: () =>
      import(/* webpackChunkName: "locations" */ "../views/locations/List.vue")
  },
  {
    path: "/locations/create",
    beforeEnter: requiresAuth,
    component: () =>
      import(
        /* webpackChunkName: "createLocation" */ "../views/locations/Create.vue"
      )
  },
  {
    path: "/shops",
    beforeEnter: requiresAuth,
    component: () =>
      import(/* webpackChunkName: "shopList" */ "../views/shops/List.vue")
  },
  {
    path: "/shops/create",
    beforeEnter: requiresAuth,
    component: () =>
      import(/* webpackChunkName: "shopCreate" */ "../views/shops/Create.vue")
  },
  {
    path: "/shops/:id",
    beforeEnter: requiresAuth,
    component: () =>
      import(/* webpackChunkName: "shopDetails" */ "../views/shops/Details.vue")
  },
  {
    path: "/cart",
    beforeEnter: requiresAuth,
    component: () =>
      import(/* webpackChunkName: "cart" */ "../views/ShoppingCart.vue")
  },
  {
    path: "/createProduct",
    beforeEnter: requiresAuth,
    component: () =>
      import(
        /* webpackChunkName: "createProduct" */ "../views/seller/products/Create.vue"
      )
  },
  {
    path: "/uploadProducts",
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
