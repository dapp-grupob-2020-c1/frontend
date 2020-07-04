import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/style.scss";

Vue.config.productionTip = false;

// i18n
import { defaultLocale, messages } from "./lang";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);
var i18n = new VueI18n({
  locale: defaultLocale,
  messages: messages
});

// Vue-Authenticate
import VueAuthenticate from "vue-authenticate";
Vue.use(VueAxios, axios);
Vue.use(VueAuthenticate, {
  baseUrl: process.env.VUE_APP_API_URL,
  providers: {
    google: {
      clientId: process.env.VUE_APP_OAUTH2_GOOGLE_CLIENT_ID,
      redirectUri: process.env.VUE_APP_REDIRECT_URL
    }
  }
});

// Vue Google Maps
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY
  },
  installComponents: true
});

// BootstrapVue
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
