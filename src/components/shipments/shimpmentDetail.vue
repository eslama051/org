<template>
  <div>
    <div>
      <h1>Shipment Detail</h1>
      <shipment-item :shipment="shipment" :idx="2"></shipment-item>
    </div>
    <div class="shipment-details">
      <base-card class="shipment-detail">
        <div>
          <h1>Customer Info</h1>
          <div class="customer-info">
            <img src="../../assets/images/home/user_avatar.png" alt="" />
            <div>
              <h2>{{ customer.firstName }} {{ customer.lastName }}</h2>
              <h4># {{ customer.id }}</h4>
            </div>
          </div>
          <h1>Delivering Details</h1>
          <div class="delivering-details">
            <h3>Flight Date</h3>
            <h3>destination</h3>
          </div>
          <div class="delivering-details">
            <h3>destination</h3>
            <h3>Flight Date</h3>
          </div>
        </div>
      </base-card>
      <base-card class="shipment-detail">
        <h1>Pakage Info</h1>
        <ul class="package-list">
          <li v-for="item in packages" :key="item.mount">
            <img src="../../assets/images/home/Group.svg" alt="" />
            <h2>{{ item.title }}</h2>
            <h2>{{ item.size }}</h2>
            <h2>{{ item.color }}</h2>
            <h2>{{ item.mount }} peace</h2>
          </li>
        </ul>
      </base-card>
    </div>
  </div>
</template>
<script>
import BaseCard from "../ui/BaseCard.vue";
import ShipmentItem from "./ShimmentItem.vue";
export default {
  props: ["id"],
  components: {
    ShipmentItem,
    BaseCard,
  },
  computed: {
    shipment() {
      return this.$store.getters["shipments/shipment"](this.id);
    },
    customer() {
      return this.shipment.customer;
    },
    packages() {
      return this.shipment.package;
    },
  },
  created() {
    console.log(this.$store.getters["shipments/shipment"](this.id));
  },
};
</script>
