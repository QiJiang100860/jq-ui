// 组件
import jqTool from "./jqTool";
import jqUi from "./jqUi";

// 指令
import jqDir from "./jqDir";

// 工具包
import jqUtil from "./jqUtils";

const cAndD = Object.assign({}, jqUi, jqDir, jqTool);

const install = function(Vue) {
  if (install.installed) return;
  for (let key in cAndD) {
    const item = cAndD[key];
    Vue.use(item);
  }
};
//  全局引用可自动安装
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

const exportLibs = Object.assign(
  {
    install,
    jqUtil //自定组件工具包
  },
  cAndD
);

export default exportLibs;
