<template>
  <v-app id="top">
    <app-nav></app-nav>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
/* eslint-disable no-console */
import { EventBus } from "./event-bus.js";
import { mapGetters } from "vuex";
import AppNav from "@/components/AppNav";
export default {
  name: "App",
  components: { AppNav },
  created() {
    if (!this.isAppReady) {
      this.$store.dispatch("initApp");
    }
  },
  computed: {
    ...mapGetters(["isAppReady"])
  },
  data() {
    return {
      //
    };
  },
  mounted() {
    document.body.addEventListener("click", function(e) {
      // e.target was the clicked element
      if (e.target.className === "footnote-link") {
        e.preventDefault();
        let target = e.target.getAttribute("href");
        let reference = document.getElementById(target.substr(1));
        console.log(reference.innerText);
        EventBus.$emit("showSnackbar", reference.innerHTML);
      }
    });
  }
};
</script>

<style>
.wrapper {
}
body {
  font-size: 18px;
  color: #000;
  font-family: "Lato", sans-serif !important;
}
/**
* https://github.com/vuetifyjs/vuetify/issues/3875
*/

body {
  -webkit-overflow-scrolling: touch;
}

body.noscroll {
  -webkit-overflow-scrolling: auto !important;
}

p,
.excerpt {
  /* font-family: "Open Sans", sans-serif; */
  /* font-family: "Gentium Book Basic", serif; */
  /* text-indent: 2em; */
}

/* .markdown-body p:first-child:first-letter {
  color: #ccc;
  float: left;
  font-family: "Gentium Book Basic", serif;
  font-size: 75px;
  line-height: 60px;
  padding-top: 4px;
  padding-right: 8px;
  padding-left: 3px;
} */

.full-height {
  padding-top: 50px !important;
  min-height: 100vh;
  padding-bottom: 50px !important;
}
h1,
h2,
h3,
h4,
h5,
h6,
.headline {
  /* font-family: neue-haas-grotesk-display, sans-serif; */
  font-family: "Lato", sans-serif !important;
  font-weight: 900;
  font-style: normal;
  text-transform: uppercase;
}
div.sidebar {
  /* font-family: neue-haas-grotesk-display, sans-serif; */
  /* font-family: "Oswald", sans-serif; */
  font-weight: 700;
  font-style: normal;
}

.appTitle,
.toolbarTitle,
.sidebar-item {
  /* font-family: neue-haas-grotesk-display, sans-serif; */
  /* font-family: "Oswald", sans-serif; */
  font-weight: 700;
  font-style: normal;
}

a.sidebar-info {
  color: #eee;
  text-decoration: none;
  font-size: 10px;

  font-weight: bold;
}
.logo:hover {
  cursor: pointer;
}
.sidebar-info:hover {
  color: #aaa;
  cursor: pointer !important;
}

.sidebar-item {
  font-size: 18px !important;
}

.appTitle {
  color: #555;
}

.toolbar__title {
  justify-content: center !important;
}
h1.main {
  font-size: 4em;
}
h2.header {
  font-size: 2.7em;
  margin-bottom: 50px !important;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
  line-height: 1.3em;
}
h2,
h3 {
  border-bottom: 0px solid #bbb;
  padding-bottom: 3px;
  margin-bottom: 15px;
}
h2.no-rule {
  border-bottom: 0px !important;
}
.muted {
  color: #666;
}
ul,
ol {
  margin-bottom: 30px;
  margin-top: 30px;
}
ul li,
ol li {
  font-size: 16px;
  /* font-family: "Gentium Book Basic", serif; */
}
ul li,
ol li {
  margin-bottom: 8px;
}

.page {
  border-top: 5px solid #fff;
}

li.footnote-item p {
  font-size: 12px !important;
  font-family: "Roboto", sans-serif !important;
}

.snackbar p {
  font-size: 14px !important;
  font-family: "Roboto", sans-serif !important;
}

ol.footnotes-list {
  margin-top: 30px;
}

*:focus {
  outline: none;
}

summary {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 22px;
}

summary:hover {
  cursor: pointer;
}

a {
  font-weight: 700;
}

.drop {
  color: #00838f;
  float: left;
  font-family: Georgia;
  font-size: 75px;
  line-height: 60px;
  padding-top: 4px;
  padding-right: 8px;
  padding-left: 3px;
}

.dark a {
  color: #333 !important;
}
.light a {
  color: #333 !important;
}

.icjia a {
  color: #fff !important;
}

.theme--dark.v-timeline .v-timeline-item__dot {
  background: #00838f;
}
</style>
