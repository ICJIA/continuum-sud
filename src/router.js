import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: { nav: true, social: true }
    },
    {
      path: "/print-friendly",
      name: "printFriendly",
      component: () =>
        import(/* webpackChunkName: "error" */ "./views/PrintFriendly.vue"),
      meta: { nav: false, social: false }
    },
    {
      path: "*",
      redirect: { name: "home" }
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
});
