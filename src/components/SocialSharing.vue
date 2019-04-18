<template>
  <div>
    <social-sharing
      :url="config.meta.url"
      :title="config.meta.title"
      :description="config.meta.description"
      :twitter-user="config.meta.twitterUser"
      inline-template
      data-aos="slide-right"
      data-aos-delay="50"
    >
      <!-- <div>
       
      </div> -->

      <div class="icon-bar">
        <network
          network="facebook"
          style="background-color:#305891; padding:6px 6px; cursor:pointer; display: block ; color: #fff;"
        >
          <i class="fab fa-facebook"></i>
        </network>
        <network
          network="twitter"
          class="social-icon"
          style="background-color:#55acee; padding:6px 6px; cursor:pointer; display: block ; color: #fff"
        >
          <i class="fab fa-twitter"></i>
        </network>
        <network
          network="linkedin"
          class="social-icon"
          style="background-color:#4498c8; padding:6px 6px; cursor:pointer; display: block ; color: #fff"
        >
          <i class="fab fa-linkedin"></i>
        </network>
      </div>
    </social-sharing>
  </div>
</template>

<script>
import config from "@/config";
export default {
  props: {
    url: String,
    title: String
  },
  mounted() {
    // console.log(this.config.meta.description);
  },
  data() {
    return {
      config
    };
  },
  methods: {}
};
</script>

<style scoped>
.icon-bar {
  position: fixed;
  top: 70%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 5000;
}
</style>
