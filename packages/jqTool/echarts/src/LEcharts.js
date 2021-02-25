export default class LEcharts {
  constructor(option) {
    this.option = option;
    this.cdn = "";
    this.script = null;
    this.echarts = window.echarts || null;
    this.init();
  }

  init() {
    // 初始化连接
    this.cdn = "https://cdn.bootcss.com/echarts/3.7.0/echarts.min.js";
    // 加载
    this.script = this.createScript(this.cdn);
    // 注册
    if (this.echarts) {
      console.log("走本地");
      this.option.success(this.echarts);
    } else {
      console.log("走注册");
      this.insertScript(this.script).then(() => {
        this.echarts = window.echarts;
        this.option.success(this.echarts);
      });
    }
  }

  // 创建脚本
  createScript(url) {
    const script = document.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    script.setAttribute("defer", true);
    return script;
  }

  // 插入脚本
  insertScript(script) {
    return (function(script) {
      return new Promise(s => {
        const head = document.head;
        head.appendChild(script);
        script.onload = () => {
          s();
        };
      });
    })(script);
  }
}
