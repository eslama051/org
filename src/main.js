import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// importing base button
import BaseButton from "./components/ui/BaseButton.vue";

//importing main.scss file
import "./assets/scss/main.scss";

//importing footor
import TheFooter from "./components/layouts/TheFooter.vue";

import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";

Vue.component("vue-phone-number-input", VuePhoneNumberInput);

Vue.component("base-button", BaseButton);
Vue.component("the-footer", TheFooter);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
