<template>
  <div class="data-wrapper">
    <div class="header" :style="header">
      <label class="label">{{ label }}</label>
      <div class="more" v-if="more" @click="emitMore">
        <span>{{ more }}</span>
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "jqWrapper",
  props: {
    theme: {
      default: "#08A1A4",
      type: String
    },
    label: {
      default: "标题",
      type: String
    },
    more: {
      default: "",
      type: String
    }
  },
  data() {
    return {
      header: {}
    };
  },
  created() {
    const _t = this.theme;
    this.header = {
      background: `linear-gradient(269deg, ${_t}cc 0%, ${_t} 100%)`
    };
  },
  methods: {
    emitMore() {
      this.$emit("emitMore");
    }
  }
};
</script>

<style lang="less" scoped>
.data-wrapper {
  width: 100%;
  height: 100%;
  box-shadow: 0px 2px 16px 0px rgba(20, 128, 119, 0.2);

  .header {
    line-height: 40px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 24px;
    .label {
      font-size: 18px;
      color: #fff;
      font-weight: 700;
      text-shadow: 0px 2px 5px rgba(29, 107, 166, 0.5);
    }
    .more {
      font-size: 16px;
      color: #fff;
      text-decoration: underline;
      cursor: pointer;
      i {
        font-size: 12px;
        text-decoration: underline;
      }
    }
  }
  .content {
    height: calc(100% - 40px);
    background: linear-gradient(-26deg, #f5fdff 0%, #f3feff 54%, #f3ffff 100%);

    // background: linear-gradient(-26deg, #e4f8ff 0%, #f0fdff 54%, #dbfeff 100%);
    // background: #f0f0f0;
    box-sizing: border-box;
    padding: 20px;
  }
}
</style>
