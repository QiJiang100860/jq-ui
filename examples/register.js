import Vue from "vue";
import jq from "~";
const { jqUtil } = jq;

// 注册组件
Vue.use(jq);

// 注册脚本
Vue.prototype.$jq = jqUtil;
