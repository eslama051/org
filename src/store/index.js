import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
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
  modules: {},
});
