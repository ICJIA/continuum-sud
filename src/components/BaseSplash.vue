<template>
  <v-parallax
    dark
    src="/splash-cropped-min-v2.jpg"
    v-if="
      $vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl
    "
    height="500"
  >
    <v-layout align-center column justify-center>
      <!-- <h1 class="main mb-3 justify-center">Drug Continuum</h1> -->
    </v-layout>
  </v-parallax>
</template>

<script>
export default {};
</script>

<style scoped>
.fullscreen {
  min-width: 100vw;
  min-height: 100vh;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
}
</style>
