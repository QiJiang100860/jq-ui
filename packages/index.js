import jqWrapper from "./jqWrapper";
import jqLayout from "./jqLayout";
import jqMap from "./jqMap";
const components = [jqWrapper, jqLayout, jqMap];
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
  jqWrapper,
  jqLayout,
  jqMap
};
export { jqWrapper, jqLayout };
