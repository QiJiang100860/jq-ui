<template>
  <div class="f-header">
    <div class="left" @click="tohome">
      <span class="logo">JQ</span>
      <span class="title">提高开发效率得enmmmm</span>
    </div>
    <div class="right">
      <div class="time">2022-12-10 10:10:10</div>
      <div class="header">JQ</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    tohome() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="less" scoped>
.f-header {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  background: #1e1e1e;
  .left,
  .right {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 30px;
    height: 30px;
    border: solid 2px #fff;
    text-align: center;
    line-height: 30px;
    border-radius: 50%;
    margin-right: 8px;
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
  }
  .title {
    font-size: 14px;
    color: #ddd;
    cursor: pointer;
  }

  .time {
    color: #fff;
  }
  .header {
    width: 28px;
    height: 28px;
    border: solid 2px #fff;
    text-align: center;
    line-height: 28px;
    border-radius: 50%;
    margin-right: 8px;
    font-size: 12px;
    font-weight: 700;
    color: #fff;
    margin-left: 10px;
  }
}
</style>