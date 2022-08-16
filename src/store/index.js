import Vue from "vue";
import Vuex from "vuex";
import shipmentsModule from "./shipments/";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    shipments: shipmentsModule,
  },
  state: {
    fullNumber: null,
  },
  getters: {
    number(state) {
      return state.fullNumber;
    },
  },
  mutations: {
    setNumber(state, payload) {
      state.fullNumber = payload;
    },
  },
  actions: {
    setNumber(conetext, payload) {
      conetext.commit("setNumber", payload);
    },
  },
});
