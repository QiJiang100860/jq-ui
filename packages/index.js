import SyWrapper from "./SyWrapper";
import SyNodata from "./SyNodata";
import SyMap from "./SyMap";
const components = [SyWrapper, SyNodata, SyMap];
const install = function(Vue) {
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
  SyWrapper
};
export { SyWrapper };
