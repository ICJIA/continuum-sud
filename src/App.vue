<template>
  <v-app id="top">
    <app-nav v-if="$route.meta.nav"></app-nav>
    <SocialSharing v-if="$route.meta.social"></SocialSharing>
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
import SocialSharing from "@/components/SocialSharing";
export default {
  name: "App",
  components: { AppNav, SocialSharing },
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
    console.log(process.env.VUE_APP_URL);
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
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-style: normal;
  /* text-transform: uppercase; */
}

.uppercase {
  text-transform: uppercase;
}

.lato,
.bodyFont {
  font-family: "Lato", sans-serif !important;
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
  font-size: 16px;
}

.appTitle {
  font-family: "Lato", sans-serif;
}

.appTitle {
  color: #222;
}
.appTitle.sm {
  font-size: 14px;
}

.appTitle.xs {
  font-size: 12px;
}

.appTitle .sub {
  /* color: #666; */
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

.toolbar__title {
  justify-content: center !important;
}
h1.main {
  font-size: 4em;
}
h2.header {
  font-size: 2.7em;
}

h2.header.xs,
h2.header.sm {
  font-size: 1.5em;
  /* margin-bottom: 20px !important;
  border-bottom: 1px solid #fff;
  padding-bottom: 8px;
  line-height: 1.5em; */
}

h2,
h3 {
  border-bottom: 0px solid #bbb;
  padding-bottom: 3px;
  margin-bottom: 15px;
}
h2.rule {
  margin-bottom: 50px !important;
  border-bottom: 1px solid #ddd;
  padding-bottom: 8px;
  line-height: 1.3em;
}
h2.no-rule {
  border-bottom: 0px !important;
}

h2 a.footnote-link,
h3 a.footnote-link {
  font-size: 12px;
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
  font-family: "Lato", sans-serif;
}
ul li,
ol li {
  margin-bottom: 20px;
  margin-left: 10px;
}
hr {
  margin-top: 15px;
  margin-bottom: 15px;
}
.page {
  border-top: 5px solid #fff;
}

li.footnote-item p {
  font-size: 12px !important;
}

.snackbar p {
  font-size: 14px !important;
}

ol.footnotes-list {
  margin-top: 30px;
}

ol.footnotes-list {
  font-size: 12px !important;
}

*:focus {
  outline: none;
}

summary {
  font-weight: bold;
  text-transform: uppercase;
  font-size: 20px;
  margin-bottom: 35px;
}

summary:hover {
  cursor: pointer;
}

summary:first-of-type {
  margin-top: 25px;
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

.markdown-body table {
  border-collapse: collapse;
  border-spacing: 0;

  margin-bottom: 55px;
}

.markdown-body td,
.markdown-body th {
  padding: 0;
}

.markdown-body table {
  display: block;
  overflow: auto;
  width: 100%;
}

.markdown-body table th {
  font-weight: 600;
}

.markdown-body table td,
.markdown-body table th {
  border: 1px solid #dfe2e5;
  padding: 6px 13px;
}

.markdown-body table tr {
  background-color: #fff;
  border-top: 1px solid #c6cbd1;
}

.markdown-body table tr:nth-child(2n) {
  background-color: #f6f8fa;
}

.author-link {
  text-decoration: none;
  color: #00838f;
}
</style>
