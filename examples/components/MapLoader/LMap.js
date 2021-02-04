import vue from 'vue';
export default class LMap {
  constructor(option) {
    this.option = option;
    this.url = '';
    this.version = '';
    this.key = '';
    this._libUrl = '';
    this._libVersion = '';
    this.libs = [];

    this.mainUrl = '';
    this.libUrls = [];

    this.init();
  }

  init() {
    // 初始化参数
    this.initParam();
    // 拼装请求连接
    this.pingMainUrl();
    // 注册地图入口方法
    this.register();
  }

  initParam() {
    const { url, version, key, lib } = this.option;
    const _libUrl = lib.url;
    const _libVersion = lib.version;
    this.url = url;
    this.version = version || '3.0';
    this.key = key || '9kXK8VjQdjC7KUnKdpSoEbfpVcEe2RHo';
    this._libUrl = _libUrl;
    this._libVersion = _libVersion || '1.2';
  }
  // 拼接主要脚本请求
  pingMainUrl() {
    this.mainUrl = `${this.url}?type=webgl&v=${this.version}&ak=${this.key}`;
  }
  // 拼装副脚本请求
  pingLibUrl(option) {
    this.libUrls = option.map(item => {
      return `${this._libUrl}${item}/${this._libVersion}/src/${item}_min.js`;
    });
  }

  // 创建脚本
  createScript(url) {
    const script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';
    script.setAttribute('defer', true);
    return script;
  }

  // 插入脚本
  insertScript(script) {
    return (function(script) {
      return new Promise((s) => {
        const head = document.head;
        ``;
        head.appendChild(script);
        script.onload = () => {
          s(1);
        };
      });
    })(script);
  }

  // 创建promis请求
  createPromise(urls) {
    return urls
      .map(item => this.createScript(item))
      .map(item => this.insertScript(item));
  }

  load(option) {
    const hasOpt = option && option.length;
    if (hasOpt) {
      this.pingLibUrl(option);
    }

    // 加载所有脚本
    // 1、创建主脚本对象
    // 2、创建副脚本对象
    const _promise = this.createPromise([this.mainUrl, ...this.libUrls]);
    return new Promise((s) => {
      Promise.all(_promise).then(() => {
        const BMap = window.BMap || window.BMapGL;
        const BMapLib = window.BMapLib;
        s({ BMap, BMapLib });
      });
    });
  }
  register() {
    vue.prototype.$loadMap = this.load.bind(this);
  }
}
