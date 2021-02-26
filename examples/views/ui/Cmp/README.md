### ui组件和tool组件开发规范约定
***
#### 项目结构
> packages
> > jqUi--ui组件  
> > jqTool--工具组件   
> > jqDir--指令   
> > jqUtils--工具包  
#### 模板内容
包含了一个组件开发的代码结构，命名规范，一般组件名约定为【**jq-xxx** 】
``` js
<template>
  <div class="jq-dev">
    jq-dev
  </div>
</template>

<script>
export default {
  name: "jqDev",
  props: {},
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style lang="less" scoped></style>
```