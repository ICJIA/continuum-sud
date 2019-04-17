<template>
  <v-layout row justify-center>
    <v-dialog
      v-model="modal"
      fullscreen
      persistent
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar fixed dark :color="content.color" class="pt-0">
          <v-btn dark @click="closeModal" color="grey darken-3">
            <v-icon>close</v-icon>CLOSE
          </v-btn>
          <v-toolbar-title
            @click="closeModal"
            class="toolbarTitle"
          ></v-toolbar-title>
        </v-toolbar>

        <!-- <div v-html="content.html" ref="mydiv"></div> -->
        <v-container fluid class="py-5">
          <v-layout row>
            <v-flex class="" xs10 offset-xs1>
              <div class="wrapper">
                <h2 class="no-rule text-xs-left mt-5" style="font-size: 2.2em">
                  <span style="text-transform: uppercase;"
                    >{{ content.timelineTitle
                    }}<span v-if="content.timelineTitle">:</span></span
                  ><span
                    v-if="content.timelineTitle"
                    style="text-transform: uppercase;"
                  >
                    {{ content.title }}</span
                  >
                </h2>
                <div v-html="content.html" ref="mydiv" class="my-2"></div>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import { EventBus } from "@/event-bus.js";

export default {
  created() {
    // eslint-disable-next-line no-unused-vars
    EventBus.$on("displayModal", content => {
      this.content = content;
      this.modal = true;
    });
  },
  mounted() {},
  watch: {
    content() {
      this.$refs["mydiv"].addEventListener("click", function(event) {
        if (event.target.className === "footnote-link") {
          event.preventDefault();
          let target = event.target.getAttribute("href").substr(1);
          let reference = document.getElementById(target);
          EventBus.$emit("showSnackbar", reference.innerHTML);
        }
      });
    }
  },
  methods: {
    closeModal() {
      EventBus.$emit("enableHeadroom");
      this.modal = false;
    }
  },
  data() {
    return {
      modal: false,
      notifications: false,
      sound: true,
      widgets: false,
      content: ""
    };
  }
};
</script>

<style>
.toolbarTitle:hover {
  cursor: pointer;
}
</style>
