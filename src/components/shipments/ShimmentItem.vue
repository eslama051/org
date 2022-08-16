<template>
  <base-card>
    <li class="shipment-item" @click="$emit('click')">
      <p v-if="shipment.canDelete">true</p>
      <div>
        <h4 class="gray">shipment No {{ num }}</h4>
        <h4 class="date">{{ shipment.date }}</h4>
      </div>
      <div>
        <h2>#{{ shipment.id }}</h2>
        <h4 class="green"><span class="dot"></span>{{ shipment.state }}</h4>
      </div>
    </li>
  </base-card>
</template>
<script>
export default {
  props: ["shipment", "idx"],

  computed: {
    num() {
      return this.idx + 1;
    },
  },
};
</script>
