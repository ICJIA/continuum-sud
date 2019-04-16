<template>
  <div :id="content.slug" class="page">
    <v-container
      fluid
      class="full-width full-height"
      :style="setPageStyle(content.theme)"
    >
      <v-layout row>
        <v-flex class="" xs10 offset-xs1
          ><h2 class="header">
            {{ content.title }}
          </h2></v-flex
        >
      </v-layout>
      <v-layout row>
        <v-flex class="" xs10 offset-xs1>
          <div class="wrapper">
            <v-timeline :dense="isSm || isXs">
              <v-timeline-item
                v-for="(item, index) in timelineContent"
                :key="index"
                :color="item.color"
                :data-aos="getDirection(index)"
              >
                <template v-slot:opposite v-if="item.displayTimelineTitle">
                  <h3 style="text-transform: uppercase; color: #eee">
                    {{ item.timelineTitle }}
                  </h3>
                </template>
                <v-card class="elevation-2">
                  <v-card-title
                    class="headline"
                    :class="item.color"
                    style="color: #fff"
                    >{{ item.title }}</v-card-title
                  >
                  <v-card-text class="excerpt">
                    {{ item.excerpt }}
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn dark :color="item.color" @click="displayModal(item)"
                      >More Details</v-btn
                    >
                  </v-card-actions>
                </v-card>
              </v-timeline-item>
            </v-timeline>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable no-console */
import config from "@/config";

import { EventBus } from "@/event-bus.js";
import { mapGetters } from "vuex";
export default {
  props: {
    content: {
      type: Object,
      default: null
    }
  },
  mounted() {
    console.log(this.isSm, this.isXs);
  },
  computed: {
    ...mapGetters(["intercepts", "ebps"]),
    timelineContent() {
      if (this.content.timelineContent === "intercepts") {
        return this.intercepts;
      } else if (this.content.timelineContent === "ebps") {
        return this.ebps;
      } else {
        return [];
      }
    },
    isSm() {
      return this.$vuetify.breakpoint.sm;
    },
    isXs() {
      return this.$vuetify.breakpoint.xs;
    }
  },
  methods: {
    displayModal(content) {
      EventBus.$emit("displayModal", content);
      EventBus.$emit("disableHeadroom");
    },
    getDirection(index) {
      let animation = "undefined";
      if (index % 2 === 0) {
        animation = this.isXs || this.isSm ? "fade-in" : "fade-right";
        return animation;
      } else {
        animation = this.isXs || this.isSm ? "fade-in" : "fade-left";
        return animation;
      }
    },
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

<style scoped></style>
