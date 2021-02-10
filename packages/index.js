import jqWrapper from "./jqWrapper";
import jqLayout from "./jqLayout";
import jqMap from "./jqMap";
import jqEcharts from "./jqEcharts";
import jqUtil from "./utils/index.js"
const components = [jqWrapper, jqLayout, jqMap, jqEcharts];
const install = function (Vue) {
  if (install.installed) return;
  components.map(component => {
    Vue.use(component);
  });
};
//  全局引用可自动安装
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export default {
  install,
  jqUtil, //自定组件工具包
  jqWrapper,
  jqLayout,
  jqMap,
  jqEcharts,

};
export { jqWrapper, jqLayout, jqMap, jqEcharts, jqUtil };
