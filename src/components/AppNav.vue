<template>
  <div id="icjia">
    <SidebarMenu></SidebarMenu>
    <headroom :disabled="!headroom">
      <header>
        <v-toolbar :clipped-left="clipped">
          <img
            src="../assets/img/logo-small.png"
            width="60"
            alt="Illinois Criminal Justice Information Authority"
            v-scroll-to="{
              el: '#top',
              offset: -50
            }"
            class="logo"
          />

          <v-toolbar-title
            class="appTitle"
            v-scroll-to="{
              el: '#top',
              offset: -50
            }"
            >Reducing Substance Abuse Disorders and Related Offending: A
            Continuum of Evidence-Informed Practices in the Criminal Justice
            System</v-toolbar-title
          >
          <v-spacer></v-spacer>
          <v-toolbar-side-icon
            @click.stop="toggleSidebar"
          ></v-toolbar-side-icon>
        </v-toolbar>
      </header>
    </headroom>
  </div>
</template>

<script>
import { EventBus } from "@/event-bus.js";
import SidebarMenu from "@/components/SidebarMenu";
import { mapGetters } from "vuex";
import { headroom } from "vue-headroom";
export default {
  components: {
    SidebarMenu,
    headroom
  },
  computed: {
    ...mapGetters(["pages", "intercepts", "ebps", "headroom"])
  },
  mounted() {
    // EventBus.$on("displayModal", () => {
    //   console.log("disable headroom");
    // });
    EventBus.$on("enableHeadroom", () => {
      this.$store.dispatch("enableHeadroom");
    });
    EventBus.$on("disableHeadroom", () => {
      this.$store.dispatch("disableHeadroom");
    });
  },
  methods: {
    goto(url) {
      location.href = url;
    },

    toggleSidebar() {
      EventBus.$emit("toggleSidebar");
    }
  },
  data() {
    return {
      drawer: false,
      clipped: false
    };
  }
};
</script>
<style>
.appTitle:hover,
.logo:hover {
  cursor: pointer;
}
</style>
