import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 导入全局样式
import "@/style/index.less";

// 注册组件库组件
import "./register.js";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
