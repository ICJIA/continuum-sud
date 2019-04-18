<template>
  <div>
    <base-snackbar></base-snackbar>
    <v-container fluid>
      <v-layout row>
        <v-flex class="" xs10 offset-xs1>
          <v-btn to="/" color="cyan darken-4" class="white--text no-print">
            <v-icon left dark>arrow_back</v-icon>
            Back to site
          </v-btn>
          <v-btn
            @click="print"
            color="cyan darken-4"
            class="white--text no-print"
          >
            <v-icon left dark>print</v-icon>
            Print
          </v-btn>
          <base-author :print="false"></base-author>
          <div v-for="page in pages" :key="page.title">
            <span v-if="page.printFriendly">
              <div
                style="margin-top: 80px; font-size: 40px; font-weight: 900; margin-bottom: 20px; border-bottom: 1px solid #aaa; padding-bottom: 10px;"
              >
                {{ page.title }}
              </div>
              <div v-html="sanitize(page.html)" class="markdown-body"></div>
            </span>
          </div>

          <div v-for="intercept in intercepts" :key="intercept.title">
            <span>
              <div
                style="margin-top: 100px; font-size: 40px; font-weight: 900; margin-bottom: 20px; border-bottom: 1px solid #aaa; padding-bottom: 10px;"
              >
                {{ intercept.timelineTitle }}: {{ intercept.title }}
              </div>
              <div
                v-html="sanitize(intercept.html)"
                class="markdown-body"
              ></div>
            </span>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseSnackbar from "@/components/BaseSnackbar";
import BaseAuthor from "@/components/BaseAuthor";
export default {
  components: {
    BaseSnackbar,
    BaseAuthor
  },
  methods: {
    sanitize(html) {
      let sanitized = html.replace(/<(\/?|!?)(summary|details)>/g, "");

      return sanitized;
    },
    print() {
      window.print();
    }
  },
  computed: {
    ...mapGetters(["isAppReady", "pages", "intercepts"])
  }
};
</script>

<style scoped>
@media print {
  .no-print,
  .no-print * {
    display: none !important;
  }
}
</style>
