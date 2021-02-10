<template>
  <div class="frame">
    <jq-layout :hh="60" :lw="120" mold="hlr">
      <template slot="header">
        <f-header></f-header>
      </template>
      <template slot="meau">
        <slider></slider>
      </template>
      <template slot="content">
        <div class="mian-content">
          <router-view></router-view>
        </div>
      </template>
      <template slot="footer">
        <div>footer</div>
      </template>
    </jq-layout>
  </div>
</template>
<script>
import Slider from "./Slider";
import FHeader from "./FHeader";
export default {
  components: {
    Slider,
    FHeader,
  },
};
</script>
<style lang="less" scoped>
.frame {
  width: 100%;
  height: 100%;
}
.mian-content{
  width: 100%;
  height: 100%;
  background: #eee;
  padding:10px;
}
</style>