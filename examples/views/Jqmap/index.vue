<template>
  <div>
    <p>还在为加载地图心烦心累？看看这种方式你是不是还满意</p>
    <jq-map style="width: 600px; height: 600px" @success="loaded">
      <div id="mapcontent"></div>
    </jq-map>
    <p>1、使用jq-map(我把它取名为地图加载器)</p>
    <p>2、为他提供一个有宽高得容器，或者用style去修饰它</p>
    <p>3、里面有一个地图容器插槽，要有id</p>
    <p>4、event上面有一个success事件回调函数，从window.$$Global_MAP获取全局得地图对象</p>
    <p>5、下来应该就知道怎么用了吧，抄抄百度地图api</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      map: null,
    };
  },
  methods: {
    loaded() {
      this.init();
    },
    init() {
      const BMap = window.$$Global_MAP;
      this.map = new BMap.Map("mapcontent", {
        enableMapClick: false,
      });
      this.map.enableAutoResize();
      this.map.centerAndZoom(new BMap.Point(105.806276, 32.147223), 5); //设置中心点
      this.map.enableScrollWheelZoom(); //设置滚轮滚动
    },
  },
};
</script>
<style lang="less" scoped>
</style>