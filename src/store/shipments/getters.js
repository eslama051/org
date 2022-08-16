export default {
  shipments(state) {
    return state.shipments;
  },
  shipment: (state) => (id) => {
    return state.shipments.find((shipment) => shipment.id == id);
  },
};
