import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index";

Vue.use(VueRouter);

const requiresAuth = (to, from, next) => {
  if (store.state.auth.authenticated) {
    next();
  } else {
    // TODO: launch error or notification
    next("/login");
  }
};

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/oauth2/redirect",
    component: () =>
      import(
        /* webpackChunkName: "authRedirect" */ "../views/AuthRedirect.vue"
      ),
  },
  {
    path: "/login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
  },
  {
    path: "/dashboard",
    beforeEnter: requiresAuth,
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
  },
  {
    path: "/locations",
    beforeEnter: requiresAuth,
    component: () =>
      import(/* webpackChunkName: "locations" */ "../views/locations/List.vue"),
  },
  {
    path: "/locations/create",
    beforeEnter: requiresAuth,
    component: () =>
      import(
        /* webpackChunkName: "createLocation" */ "../views/locations/Create.vue"
      ),
  },
  {
    path: "/shops",
    beforeEnter: requiresAuth,
    component: () =>
      import(/* webpackChunkName: "shopList" */ "../views/shops/List.vue"),
  },
  {
    path: "/shops/create",
    beforeEnter: requiresAuth,
    component: () =>
      import(/* webpackChunkName: "shopCreate" */ "../views/shops/Create.vue"),
  },
  {
    path: "/shops/:shopId",
    beforeEnter: requiresAuth,
    component: () =>
      import(
        /* webpackChunkName: "shopDetails" */ "../views/shops/Details.vue"
      ),
  },
  {
    path: "/shops/:shopId/edit",
    beforeEnter: requiresAuth,
    component: () =>
      import(/* webpackChunkName: "shopEdit" */ "../views/shops/Edit.vue"),
  },
  {
    path: "/shops/:shopId/products",
    beforeEnter: requiresAuth,
    component: () =>
      import(
        /* webpackChunkName: "shopProductsList" */ "../views/shops/products/List.vue"
      ),
  },
  {
    path: "/shops/:shopId/products/create",
    beforeEnter: requiresAuth,
    component: () =>
      import(
        /* webpackChunkName: "shopProductsCreate" */ "../views/shops/products/Create.vue"
      ),
  },
  {
    path: "/shops/:shopId/products/createMany",
    beforeEnter: requiresAuth,
    component: () =>
      import(
        /* webpackChunkName: "shopProductsCreateMany" */ "../views/shops/products/CreateMany.vue"
      ),
  },
  {
    path: "/shops/:shopId/products/:productId/edit",
    beforeEnter: requiresAuth,
    component: () =>
      import(
        /* webpackChunkName: "shopProductsEdit" */ "../views/shops/products/Edit.vue"
      ),
  },
  {
    path: "/orders/create",
    beforeEnter: requiresAuth,
    component: () =>
      import(
        /* webpackChunkName: "orderCreate" */ "../views/orders/Create.vue"
      ),
  },
  {
    path: "/orders/search",
    beforeEnter: requiresAuth,
    component: () =>
      import(
        /* webpackChunkName: "orderSearch" */ "../views/orders/Search.vue"
      ),
  },
  {
    path: "/orders",
    beforeEnter: requiresAuth,
    component: () =>
      import(/* webpackChunkName: "ordersList" */ "../views/orders/List.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
