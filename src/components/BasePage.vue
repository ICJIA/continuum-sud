<template>
  <div :id="content.slug" class="page">
    <!-- <BaseSplash v-if="content.slug === 'introduction'"></BaseSplash> -->
    <v-container
      fluid
      class="full-width full-height"
      :style="setPageStyle(content.theme)"
    >
      <v-layout row>
        <v-flex class="" xs10 offset-xs1>
          <div class="wrapper pt-4">
            <h2
              class="header uppercase mb-3"
              :class="{
                xs: $vuetify.breakpoint.xs,
                sm: $vuetify.breakpoint.sm,
                rule: !content.showRule
              }"
            >
              {{ content.title }}
            </h2>
            <div v-if="content.displayAuthor">
              <BaseAuthor :print="true"></BaseAuthor>
            </div>
            <div
              v-html="content.html"
              class="my-3 markdown-body"
              :class="{
                icjia: theme === 'icjia',
                dark: theme === 'dark',
                light: theme === 'light'
              }"
            ></div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import BaseAuthor from "@/components/BaseAuthor";
import config from "@/config";

export default {
  props: {
    content: {
      type: Object,
      default: null
    }
  },

  components: {
    BaseAuthor
  },
  computed: {
    theme() {
      return this.content.theme;
    }
  },
  methods: {
    setPageStyle(theme) {
      return this.config.theme[theme];
    }
  },
  data() {
    return {
      config
    };
  }
};
</script>

<style></style>
