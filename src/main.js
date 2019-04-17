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

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
