<template>
  <div>
    <div class="wrapper" style="height:200px">
      <jq-wrapper more="more" label="头部名称" @emitMore="emitMore">好用真好用</jq-wrapper>
    </div>

    <div class="wrapper">
      <jq-wrapper more="更多" label="test" @emitMore="emitMore" theme="#FFEB6C">好用真好用</jq-wrapper>
    </div>

    <div class="wrapper" style="height:300px">
      <jq-wrapper theme="#FFE6AE">好用真好用</jq-wrapper>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    emitMore(){
      alert("jq-ui真好用")
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  width: 300px;
  height: 400px;
  margin-bottom: 10px;
}
</style>