<template>
  <div class="no-data">
    <div class="info-wrapper" :class="size">
      <img :src="require('./nodata.png')" />
      <p class="text">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SyNodata",
  props: {
    text: {
      default: "暂无数据",
      type: String
    },
    size: {
      default: "large",
      type: String
    }
  }
};
</script>

<style lang="less" scoped>
.no-data {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  .info-wrapper {
    text-align: center;
    &.large {
      img {
        width: 160px;
      }
      .text {
        font-size: 16px;
      }
    }

    &.mid {
      img {
        width: 140px;
      }
      .text {
        font-size: 16px;
      }
    }

    &.small {
      img {
        width: 120px;
      }
      .text {
        font-size: 14px;
      }
    }

    &.mini {
      img {
        width: 80px;
      }
      .text {
        font-size: 12px;
      }
    }
  }
  .text {
    color: #999;
    font-size: 14px;
    margin-top: 4px;
  }
}
</style>
