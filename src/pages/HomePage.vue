<template>
  <div class="home-page">
    <home-header></home-header>
    <home-carousel></home-carousel>
  </div>
</template>
<script>
import HomeCarousel from "../components/home/HomeCarousel.vue";
import HomeHeader from "../components/home/HomeHeader.vue";
export default {
  components: {
    HomeCarousel,
    HomeHeader,
  },
};
</script>
