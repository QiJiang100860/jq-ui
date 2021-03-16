![avatar](./logo.png)
### jq-ui简介
***
很感谢你能在茫茫的网络世界发现__jq-ui__，首先我不是jQuery,也和它没有任何关系，这个项目是在工作之余自己**总结**和**归纳**的通用问题的解决方案，希望能和大家一起分享，也希望能得到大家的支持。同时很感觉和我一起奋战的兄弟，也随时欢迎大家提出Issues。[欢迎批判](https://jq-ui.wxlimu.com/#/home)
### jq-ui使用方式
***
##### 下载
`npm install jq-ui --save 或 yarn install jq-ui --save`
##### 组件指令的引入和使用
``` js
import jqUI from "jq-ui" //主体包
import 'jq-ui/lib/jq-ui.css' //公共样式
Vue.use(jqUI);
```
##### 工具函数的使用
``` js
import {jqUtil} from "jq-ui" //公共包
Vue.prototype.$jqUtil = jqUtil
```

### jq-ui版本更新
***
##### 0.1.4 项目初始化
 * jqUI-ui组件
 * jqTool-工具组件
##### 0.1.5 公共处理包对完暴露
 * jqTool-公共包类集合
##### 0.1.6 packgage重构
##### 0.1.7 公共指令