import jqWrapper from "./jqWrapper";
import jqLayout from "./jqLayout";
const components = [jqWrapper, jqLayout];
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
  jqLayout
};
export { jqWrapper, jqLayout };
