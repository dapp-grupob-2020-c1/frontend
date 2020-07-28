import Vue from "vue";
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
  messages: messages,
  numberFormats: {
    en: {
      currency: {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      },
    },
    es: {
      currency: {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      },
    },
  },
  dateTimeFormats: {
    en: {
      long: {
        year: "numeric",
        month: "short",
        day: "numeric",
        weekday: "short",
        hour: "numeric",
        minute: "numeric",
      },
    },
    es: {
      long: {
        year: "numeric",
        month: "short",
        day: "numeric",
        weekday: "short",
        hour: "numeric",
        minute: "numeric",
      },
    },
  },
  silentTranslationWarn: true,
});

// Vue Google Maps
import * as VueGoogleMaps from "vue2-google-maps";
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
  },
  installComponents: true,
});

// BootstrapVue
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount("#app");
