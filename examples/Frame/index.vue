<template>
  <div class="frame">
    <jq-layout :hh="60" :lw="120" mold="hlr">
      <template slot="header">
        <div>jq-ui:说明不是jquery,不是重复造轮子</div>
      </template>
      <template slot="meau">
        <slider></slider>
      </template>
      <template slot="content">
        <router-view></router-view>
      </template>
      <template slot="footer">
        <div>footer</div>
      </template>
    </jq-layout>
  </div>
</template>
<script>
import Slider from "./Slider";
export default {
  components: {
    Slider
  },
};
</script>
<style lang="less" scoped>
.frame {
  width: 100%;
  height: 100%;
}
</style>