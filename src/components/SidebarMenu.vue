<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    right
    temporary
    style="z-index: 10000 !important"
  >
    <v-layout fill-height column ma-0>
      <h2
        v-scroll-to="'#home'"
        class="text-xs-center"
        style="font-size: 34px; margin-top: 20px;margin-bottom: 50px; border-bottom: 1px solid #ccc; padding-bottom: 10px; "
      >
        Title here
      </h2>

      <div
        v-for="page in pages"
        :key="page.slug"
        class="mb-3 px-3 sidebar-item"
        style="font-size: 18px;"
      >
        <div
          v-scroll-to="`#${page.slug}`"
          @click="closeSidebar"
          class="sidebar-link"
        >
          {{ page.title }}
        </div>
      </div>

      <v-spacer />
      <v-divider />
      <div class="text-xs-center mt-4 mb-3 hover">
        <img
          src="@/assets/img/logo-small.png"
          class="logo"
          height="40"
          @click="goto('http://www.icjia.state.il.us')"
        />
        <h5 style="color: #aaa" class="px-3 mt-2">
          <a class="sidebar-info" href="http://www.icjia.state.il.us">
            &copy;&nbsp;2019 Illinois Criminal Justice Information Authority</a
          >
        </h5>
        <h5 class="pt-3" style="font-weight: 400">
          <a href="https://github.com/ICJIA/continuum-sud" class="sidebar-info"
            >View on Github</a
          >
        </h5>
      </div>
    </v-layout>
  </v-navigation-drawer>
</template>

<script>
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
      drawer: false
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
  color: #666;
}
</style>
