<template>
  <div>
    <div class="wrapper" style="height: 200px">
      <div class="item">
        <jq-wrapper more="more" label="头部名称" @emitMore="emitMore"
          >【label】可以配置标题哦</jq-wrapper
        >
      </div>
      <div class="item">
        <jq-wrapper
          more="更多"
          label="test"
          @emitMore="emitMore"
          theme="#0747a6"
          >【theme】可以配置主题颜色哦<br />【more】【emitMor】可以配置按钮</jq-wrapper
        >
      </div>
      <div class="item">
        <jq-wrapper theme="#ff0000">好用真好用好用真好用好用真好用</jq-wrapper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    emitMore() {
      alert("jq-ui真好用");
    }
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  height: 400px;
  display: flex;
  flex-wrap: wrap;
  .item {
    padding: 0 10px;
    width: 300px;
  }
}
</style>
