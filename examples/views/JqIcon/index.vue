<template>
  <div class="items">
    <div class="item-contemt" v-for="(item, index) in icons" :key="index">
      <div style="text-align: center">
        <jq-icon :name="item.font_class"></jq-icon>
      </div>
      <div style="text-align: center">{{ item.font_class }}</div>
    </div>
    <div class="item-contemt" v-for="(item, index) in icons" :key="index">
      <div style="text-align: center">
        <jq-icon :name="item.font_class"></jq-icon>
      </div>
      <div style="text-align: center">{{ item.font_class }}</div>
    </div>

    <div class="item-contemt" v-for="(item, index) in icons" :key="index">
      <div style="text-align: center">
        <jq-icon :name="item.font_class"></jq-icon>
      </div>
      <div style="text-align: center">{{ item.font_class }}</div>
    </div>
  </div>
</template>

<script>
import icons from "./json.js";
export default {
  data() {
    return {
      icons: icons.glyphs
    };
  }
};
</script>

<style lang="less" scoped>
.items {
  display: flex;
  flex-wrap: wrap;
}
.item-contemt {
  width: 80px;
  flex-direction: column;
  justify-content: center;
  margin: 5px;
  background: #fff;
}
</style>
