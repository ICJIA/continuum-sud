import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pages: [],
    intercepts: [],
    // ebps: [],
    isAppReady: false,
    headroom: false
  },
  mutations: {
    SET_PAGES(state, pages) {
      state.pages = pages;
    },
    SET_INTERCEPTS(state, intercepts) {
      state.intercepts = intercepts;
    },
    // SET_EBPS(state, ebps) {
    //   state.ebps = ebps;
    // },
    SET_APP_STATE(state, bool) {
      state.isAppReady = bool;
    },
    SET_HEADROOM(state, bool) {
      state.headroom = bool;
    }
  },
  actions: {
    async initApp(context) {
      const pages = await require("../api/pages.json");
      context.commit("SET_PAGES", pages);
      const intercepts = await require("../api/intercepts.json");
      context.commit("SET_INTERCEPTS", intercepts);
      // const ebps = await require("../api/ebps.json");
      // context.commit("SET_EBPS", ebps);
      context.commit("SET_APP_STATE", true);
      context.commit("SET_HEADROOM", true);
    },
    disableHeadroom(context) {
      context.commit("SET_HEADROOM", false);
    },
    enableHeadroom(context) {
      context.commit("SET_HEADROOM", true);
    }
  },
  getters: {
    pages: state => {
      return state.pages;
    },
    intercepts: state => {
      return state.intercepts;
    },
    // ebps: state => {
    //   return state.ebps;
    // },
    isAppReady: state => {
      return state.isAppReady;
    },
    headroom: state => {
      return state.headroom;
    }
  }
});
