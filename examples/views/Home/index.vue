<template>
  <map-loader @success="loaded">
    <div id="map_container"></div>
  </map-loader>
</template>

<script>
import MapLoader from "@/components/MapLoader";
export default {
  components: {
    MapLoader,
  },
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
      const BMap = this.$$Global_MAP;
      this.map = new BMap.Map("map_container", {
        enableMapClick: false,
      });
      this.map.enableAutoResize();
      this.map.centerAndZoom(new BMap.Point(118.5, 27.5), 5); //设置中心点
      this.map.enableScrollWheelZoom(true);
      //   this.map.setHeading(64.5);
      //   this.map.setTilt(73);
      /* eslint-disable */
      this.map.setMapType(BMAP_EARTH_MAP);
    },
  },
};
</script>