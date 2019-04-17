<template>
  <div>
    <BaseSnackbar></BaseSnackbar>
    <BaseModal></BaseModal>
    <BaseSplash></BaseSplash>

    <div v-for="(page, index) in pages" :key="index">
      <component :is="page.component" :content="page"></component>
    </div>
  </div>
</template>

<script>
import BasePage from "@/components/BasePage";
import BaseTimeline from "@/components/BaseTimeline";
import BaseModal from "@/components/BaseModal";
import BaseSplash from "@/components/BaseSplash";
import BaseSnackbar from "@/components/BaseSnackbar";

import { mapGetters } from "vuex";
export default {
  components: {
    BasePage,
    BaseTimeline,
    BaseModal,
    BaseSplash,
    BaseSnackbar
  },
  computed: {
    ...mapGetters(["isAppReady", "pages", "intercepts", "ebps"])
  }
};
</script>
