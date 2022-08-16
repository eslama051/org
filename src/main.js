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

import BaseCard from "./components/ui/BaseCard.vue";

Vue.component("base-button", BaseButton);
Vue.component("base-card", BaseCard);
Vue.component("the-footer", TheFooter);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
