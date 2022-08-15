import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AuthanticationPage from "../pages/AuthanticationPage.vue";
import ShipmentsPage from "../pages/ShipmentsPage.vue";
import ShipmentsInfo from "../pages/ShipmentsInfo.vue";
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
  { path: "/shipments", component: ShipmentsPage },
  { path: "/shipments/:id", component: ShipmentsInfo },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
