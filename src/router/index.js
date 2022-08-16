import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AuthanticationPage from "../pages/AuthanticationPage.vue";
import ShipmentsPage from "../pages/ShipmentsPage.vue";
import ShipmentsList from "../components/shipments/ShipmentsList.vue";
import shimpmentDetail from "../components/shipments/shimpmentDetail.vue";

import LogIn from "../components/auth/LogIn.vue";
import VerfiyLogin from "../components/auth/VerfiyLogin.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    component: HomePage,
  },
  {
    path: "/auth",
    component: AuthanticationPage,
    children: [
      { path: "login", component: LogIn },
      { path: "verfiy", component: VerfiyLogin },
    ],
  },
  {
    path: "/shipments",
    component: ShipmentsPage,
    children: [
      { path: "list", component: ShipmentsList },
      { path: ":id", component: shimpmentDetail, props: true },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
