<template>
  <div class="home-carousel-container">
    <carousel
      class="home-carousel"
      :loop="true"
      :items="0.8"
      :center="true"
      :freeDrag="true"
    >
      <img src="../../assets/images/home/home.jpg" />

      <!-- <img src="https://placeimg.com/200/200/any?2" /> -->
    </carousel>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel2";

export default {
  components: { carousel },
};
</script>
