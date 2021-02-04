<template>
  <div class="about">
    <h1>This is an about page</h1>
    <sy-wrapper></sy-wrapper>
    <sy-nodata size="mini"></sy-nodata>
    <sy-map @success="success" style="width:400px;height:400px">
      <div id="map">地图</div>
    </sy-map>
  </div>
</template>

<script>
export default {
  methods: {
    success() {
      this.init();
    },
    init() {
      const BMap = this.$$Global_MAP;
      this.map = new BMap.Map("map", {
        enableMapClick: false
      });
      this.map.enableAutoResize();
      this.map.centerAndZoom(new BMap.Point(105.806276, 32.147223), 5); //设置中心点
      this.map.enableScrollWheelZoom(); //设置滚轮滚动
    }
  }
};
</script>
