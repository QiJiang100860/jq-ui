import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import cRoute from "./routes/const"
import pRoute from "./routes/permission"
const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  ...cRoute.data,
  ...pRoute.data,
  {
    path: "*",
    redirect: "/404"
  }
];


const router = new VueRouter({
  routes
});

export default router;
