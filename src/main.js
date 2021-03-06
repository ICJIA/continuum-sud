import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./filters";

var VueScrollTo = require("vue-scrollto");
Vue.use(VueScrollTo, {
  offset: 10
});

import headroom from "vue-headroom";
Vue.use(headroom);

import SocialSharing from "vue-social-sharing";
Vue.use(SocialSharing);

import VueAnalytics from "vue-analytics";
Vue.use(VueAnalytics, {
  id: "UA-10798495-31"
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
