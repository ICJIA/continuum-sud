<template>
  <div>
    <social-sharing
      :url="config.canonicalUrl"
      :title="config.title"
      description="In the United States, more than 20 million individuals have substance use disorders (SUDs)—not including individuals with more mild or moderate substance use and misuse. Of those with SUDs, just over 10 percent ultimately receive treatment. On average, costs incurred in the United States from alcohol and drug use due to lost work productivity, health care expenses, motor vehicle accidents, and criminal justice costs exceeds $400 billion. Almost half of the cost is at the taxpayers’ expense."
      quote="In the United States, more than 20 million individuals have substance use disorders (SUDs)—not including individuals with more mild or moderate substance use and misuse."
      twitter-user="ICJIA_Illinois"
      inline-template
      data-aos="slide-right"
      data-aos-delay="50"
    >
      <!-- <div>
       
      </div> -->

      <div class="icon-bar">
        <network
          network="facebook"
          style="background-color:#305891; padding:10px 10px; cursor:pointer; display: block ; color: #fff;"
        >
          <i class="fab fa-facebook"></i>
        </network>
        <network
          network="twitter"
          class="social-icon"
          style="background-color:#55acee; padding:10px 10px; cursor:pointer; display: block ; color: #fff"
        >
          <i class="fab fa-twitter"></i>
        </network>
        <network
          network="linkedin"
          class="social-icon"
          style="background-color:#4498c8; padding:10px 10px; cursor:pointer; display: block ; color: #fff"
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
  mounted() {},
  data() {
    return {
      config
    };
  },
  methods: {}
};
</script>

<style scoped>
/* Fixed/sticky icon bar (vertically aligned 50% from the top of the screen) */
.icon-bar {
  position: fixed;
  top: 75%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  z-index: 5000;
}
</style>
