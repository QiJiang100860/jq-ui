<template>
  <div class="jq-layout">
    <div class="header" :style="shh" v-if="hasHeader">
      <slot name="header"></slot>
    </div>
    <div class="container" :style="sch">
      <div class="left jq-scrollbar__wrapper" :style="slw" v-if="hasLeft">
        <slot name="meau"></slot>
      </div>
      <div class="right jq-scrollbar__wrapper" :style="srw" v-if="hasRight">
        <slot name="content"></slot>
      </div>
    </div>
    <div class="footer" :style="sfh" v-if="hasFooter">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "jqLayout",
  props: {
    mold: {
      default: "hlrf",
      type: String,
    },
    // 左宽
    lw: {
      default: 200,
      type: Number,
    },
    // 头高
    hh: {
      default: 80,
      type: Number,
    },
    // 脚高
    fh: {
      default: 40,
      type: Number,
    },
  },
  data() {
    return {
      shh: null,
      slw: null,
      srw:null,
      sch: null,
      sfh: null,
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      // 头高
      this.shh = {
        height: `${this.hh}px`,
      };
      // 左宽
      this.slw = {
        width: `${this.lw}px`,
      };

      // 右宽
      this.srw = {
        width: `calc(100% - ${this.lw}px)`
      }

      // 容器高
      let height = 0;
      if (this.hasHeader) {
        height += this.hh;
      }
      if (this.hasFooter) {
        height += this.fh;
      }
      this.sch = {
        height: `calc(100% - ${height}px)`,
      };

      // 脚高
      this.sfh = {
        height: `${this.fh}px`,
      };
    },
  },
  computed: {
    hasHeader() {
      return this.mold.indexOf("h") >= 0;
    },
    hasLeft() {
      return this.mold.indexOf("l") >= 0;
    },
    hasRight() {
      return this.mold.indexOf("r") >= 0;
    },
    hasFooter() {
      return this.mold.indexOf("f") >= 0;
    },
  },
};
</script>

<style lang="less" scoped>
*{
  box-sizing: border-box;
}
.jq-scrollbar__wrapper {
  // 滚动条的宽度
  &::-webkit-scrollbar {
    width: 6px; // 横向滚动条
    height: 6px; // 纵向滚动条 必写
    background-color: #eeeeee;
  }

  // 滚动条的滑块
  &::-webkit-scrollbar-thumb {
    background-color: #999999;
    border-radius: 3px;
  }

  // ie下的兼容问题
  & {
    overflow-y: auto;
    scrollbar-face-color: #999999;
    scrollbar-highlight-color: #eeeeee;
    scrollbar-track-color: #eeeeee;
    scrollbar-arrow-color: #000;
  }
}
.jq-layout {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    height: 80px;
    background: #b3c0d1;
  }
  .container {
    display: flex;
    .left {
      background: #d3dce6;
    }
    .right {
      width: 100%;
      padding: 10px;
      background: #fff;
    }
  }
  .footer {
    height: 40px;
    background: #b3c0d1;
  }
}
</style>
