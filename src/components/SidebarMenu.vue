<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    right
    dark
    temporary
    style="z-index: 10000 !important"
    :class="config['primaryColor']"
  >
    <v-layout fill-height column ma-0>
      <h2
        v-scroll-to="'#home'"
        class="text-xs-center px-3"
        style="color: #fff; font-size: 18px; margin-top: 20px;margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 10px; "
      >
        Reducing Substance Abuse Disorders and Related Offending: A Continuum of
        Evidence-Informed Practices in the Criminal Justice System
      </h2>

      <div
        v-for="page in pages"
        :key="page.slug"
        class="mb-3 px-3 sidebar-item uppercase"
        style="font-size: 18px; color: #fff"
      >
        <div
          v-scroll-to="`#${page.slug}`"
          @click="closeSidebar"
          class="sidebar-link"
        >
          <span v-if="page.menuTitle">{{ page.menuTitle }}</span
          ><span v-else>{{ page.title }}</span>
        </div>
      </div>

      <v-spacer />
      <v-divider />
      <div class="text-xs-center mt-4 mb-3 hover">
        <img
          src="@/assets/img/logo-white.png"
          class="logo"
          height="40"
          @click="goto('http://www.icjia.state.il.us')"
        />
        <h5 style="color: #aaa" class="px-3 mt-2">
          <a class="sidebar-info" href="http://www.icjia.state.il.us">
            &copy;&nbsp;2019 Illinois Criminal Justice Information Authority</a
          >
        </h5>
        <h5 class="pt-1" style="font-weight: 400">
          <a href="https://github.com/ICJIA/continuum-sud" class="sidebar-info"
            >View on Github</a
          >
        </h5>
      </div>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
import config from "@/config";
import { EventBus } from "@/event-bus.js";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["pages", "intercepts", "ebps"])
  },
  mounted() {
    EventBus.$on("toggleSidebar", () => {
      this.drawer = !this.drawer;
    });

    EventBus.$on("closeSidebar", () => {
      this.drawer = false;
    });
  },
  data() {
    return {
      drawer: false,
      config
    };
  },
  methods: {
    goto(url) {
      location.href = url;
    },

    closeSidebar() {
      EventBus.$emit("closeSidebar");
    }
  }
};
</script>

<style>
.sidebar-link:hover {
  cursor: pointer;
  color: #4dd0e1;
}
</style>
