<template>
  <span :class="'jconfont jcon' + evelIcon(name)"></span>
</template>

<script>
import icons from "./json.js";
export default {
  name: "jqIcon",
  props: {
    name: {
      type: String,
      default: "yooxi"
    }
  },
  data() {
    return {
      icons: icons.glyphs
    };
  },
  created() {},
  methods: {
    evelIcon(name) {
      const _icons = this.icons.map(item => item.font_class);
      const _j = _icons.includes(name);
      return _j ? name : "yooxi";
    }
  }
};
</script>

<style lang="less" scoped>
@font-face {
  font-family: "jconfont"; /* project id 2372223 */
  src: url("//at.alicdn.com/t/font_2372223_s0vmn6mqz8s.eot");
  src: url("//at.alicdn.com/t/font_2372223_s0vmn6mqz8s.eot?#iefix")
      format("embedded-opentype"),
    url("//at.alicdn.com/t/font_2372223_s0vmn6mqz8s.woff2") format("woff2"),
    url("//at.alicdn.com/t/font_2372223_s0vmn6mqz8s.woff") format("woff"),
    url("//at.alicdn.com/t/font_2372223_s0vmn6mqz8s.ttf") format("truetype"),
    url("//at.alicdn.com/t/font_2372223_s0vmn6mqz8s.svg#jconfont") format("svg");
}

.jconfont {
  font-family: "jconfont" !important;
  font-size: 32px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.jconshang:before {
  content: "\e6c8";
}

.jconzuo:before {
  content: "\e616";
}

.jconxia:before {
  content: "\e689";
}

.jconyou:before {
  content: "\e68c";
}

.jconyooxi:before {
  content: "\e613";
}
</style>
