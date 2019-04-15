<template>
  <div>
    <v-snackbar v-model="snackbar" bottom auto-height>
      <div v-html="content" class="snackbar hyphens"></div>
      <v-btn dark color="red" @click="snackbar = false">
        Close
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { EventBus } from "../event-bus.js";
export default {
  mounted() {
    EventBus.$on("showSnackbar", content => {
      this.content = content;
      this.snackbar = true;
    });
  },
  data() {
    return {
      snackbar: false,
      content: ""
    };
  }
};
</script>

<style scoped>
.hyphens {
  -ms-word-break: break-all;
  word-break: break-all;

  /* Non standard for WebKit */
  word-break: break-word;

  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  hyphens: auto;
}
</style>
