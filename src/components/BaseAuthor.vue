<template>
  <div class="mt-5 mb-5">
    <div
      style="border-bottom: 1px solid #aaa; padding-bottom: 5px; margin-bottom: 25px"
      class="text-xs-left"
    >
      <span v-for="author in config.authors" :key="author.name">
        <a href="author.url" target="_blank" class="author-link">{{
          author.name
        }}</a>
      </span>
      |
      <span style="color: #666">Updated: {{ config.lastUpdate | format }}</span>
      | <v-icon>print</v-icon>
    </div>
  </div>
</template>

<script>
import config from "@/config";
export default {
  data() {
    return {
      config
    };
  }
};
</script>

<style lang="scss" scoped></style>
