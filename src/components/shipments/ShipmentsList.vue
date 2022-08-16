<template>
  <div class="shipment-list">
    <h1 class="shipments-list-title">MY Shipments</h1>
    <h3 class="shipments-list-subtitle">25 shipment</h3>
    <ul>
      <shipment-item
        v-for="(shipment, idx) in shipments"
        :key="shipment.id"
        :shipment="shipment"
        :idx="idx"
        @click="openingShipmentDetails(shipment)"
      ></shipment-item>
    </ul>
  </div>
</template>
<script>
import ShipmentItem from "./ShimmentItem.vue";
export default {
  components: {
    ShipmentItem,
  },
  computed: {
    shipments() {
      return this.$store.getters["shipments/shipments"];
    },
  },
  methods: {
    openingShipmentDetails(shipment) {
      console.log("smth");
      this.$router.push(`/shipments/${shipment.id}`);
    },
  },
  created() {
    console.log(this.$store.getters["shipments/shipments"]);
  },
};
</script>
