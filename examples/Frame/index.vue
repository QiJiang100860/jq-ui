<template>
  <div class="frame">
    <jq-layout :hh="60" :lw="120" mold="hlrf">
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
        <div class="footer-content">
          <span>© 2021-2022 #JQ#18710609128 版权所有</span>
        </div>
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
.mian-content {
  width: 100%;
  height: 100%;
  background: #eee;
  padding: 10px;
}
.footer-content {
  width: 100%;
  height: 100%;
  background: #1e1e1e;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #fff;
}
</style>