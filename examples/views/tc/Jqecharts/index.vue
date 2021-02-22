<template>
  <div>
    <p>vue中加载echarts，只需要一步</p>
    <p>【step1】引入jq-echrats</p>
    <p>【优势1】无感引入echarts</p>
    <p>【优势2】不会限制你对原生echarts得发挥</p>
    <p>【优势3】只要配置option就行</p>
    <p>【优势4】数据实时通讯、window变化自适应</p>
    <hr />
    <div class="demo-wrapper">
      <jq-echarts></jq-echarts>
      <jq-echarts :option="chart3Option"></jq-echarts>
      <jq-echarts :width="400" :height="400"></jq-echarts>
      <jq-echarts :option="chart4Option" :loading="chart4Loading"></jq-echarts>
    </div>
    <p>api 如下</p>
    <p>【width】容器宽度</p>
    <p>【height】容器高度</p>
    <p>【loading】加载配置</p>
    <p>【event】还再考虑更优雅得方式</p>
  </div>
</template>

<script>
import testOption from "./data.js";
export default {
  data() {
    return {
      chart3Option: {},
      chart4Option: {},
      chart4Loading: true
    };
  },
  beforeMount() {
    this.loadChart3();
    this.loadChart4();
  },
  methods: {
    loadChart3() {
      this.chart3Option = testOption.chart32;
    },
    loadChart4() {
      setTimeout(() => {
        this.chart4Option = testOption.chart4;
        this.chart4Loading = !this.chart4Loading;
      }, 3000);
    }
  }
};
</script>

<style lang="less" scoped>
.demo-wrapper {
  display: flex;
}
</style>
