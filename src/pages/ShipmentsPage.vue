<template>
  <div class="shipments-component">
    <shipment-header></shipment-header>
    <router-view></router-view>
  </div>
</template>
<script>
import ShipmentHeader from "../components/shipments/ShipmentHeader.vue";
export default {
  components: {
    ShipmentHeader,
  },
};
</script>
