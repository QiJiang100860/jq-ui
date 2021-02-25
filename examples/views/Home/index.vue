<template>
  <div class="home">
    <div class="logo" @click="toggle" :class="open ? 'active' : ''">JQ</div>
    <div style="margin-bottom: 10px">JQ祝您新年新气象，全家幸福，合家欢乐</div>
    <div class="line"></div>
    <div style="margin-top: 10px; margin-bottom: 40px">IT's NOT JQUERY</div>

    <div class="letter">
      <div class="letter-card" v-waves :class="open ? 'active' : ''">
        <span class="title">免</span>
        <div class="decp">
          【JQ】<span style="color: #ff0000">*vue开发深度总结</span
          >，欢迎使用我，对我得多多得支持，我会努力得更新出好多东西哦<span
            style="
              font-weight: 700;
              font-size: 12px;
              margin-left: 10px;
              color: #ff0000;
            "
            @click="goHome"
            >click</span
          >
        </div>
      </div>

      <div class="letter-card" v-waves :class="open ? 'active' : ''">
        <span class="title">费</span>
        <div class="decp">
          【jq-ui】<span style="color: #ff0000">*vue开发效率提升神器</span
          >，让你事半功倍，让你欲罢不能<span
            style="
              font-weight: 700;
              font-size: 12px;
              margin-left: 10px;
              color: #ff0000;
            "
            @click="goTool"
            >click</span
          >
        </div>
      </div>

      <div class="letter-card" v-waves :class="open ? 'active' : ''">
        <span class="title">广</span>
        <div class="decp">
          【jq-ui】<span style="color: #ff0000">*通用解决方案</span
          >，欢迎使用我，对我得多多得支持，我会努力得更新出好多东西哦<span
            style="
              font-weight: 700;
              font-size: 12px;
              margin-left: 10px;
              color: #ff0000;
            "
            @click="goUtil"
            >click</span
          >
        </div>
      </div>

      <div class="letter-card" v-waves :class="open ? 'active' : ''">
        <span class="title">告</span>
        <div class="decp">
          【jq-ui】<span style="color: #ff0000">*新年快乐</span
          >，欢迎使用我，对我得多多得支持，我会努力得更新出好多东西哦<span
            style="
              font-weight: 700;
              font-size: 12px;
              margin-left: 10px;
              color: #ff0000;
            "
            @click="goAlert"
            >click</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    goHome() {
      this.$router.push("/frame/jqwrapper");
    },
    goTool() {
      this.$router.push("/frame/jqmap");
    },
    goUtil() {
      this.$router.push("/frame/jqJsonp");
    },
    goAlert() {
      alert("最后再啰嗦下，祝您新年快乐，红包多多");
      this.$router.push("/frame/jqecharts");
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo {
    width: 60px;
    height: 60px;
    border: solid 4px #333;
    text-align: center;
    line-height: 60px;
    border-radius: 50%;
    margin-right: 8px;
    font-size: 24px;
    font-weight: 700;
    cursor: pointer;
    margin-bottom: 40px;
    transition: all 0.3s;
    &.active {
      width: 80px;
      height: 80px;
      line-height: 80px;
      background: #000;
      color: #fff;
    }
    &:hover {
      background: #333;
      color: #aaa;
    }
  }
  .line {
    height: 1px;
    background: #999;
    width: 800px;
  }
  .letter {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    .letter-card {
      display: inline-block;
      width: 150px;
      height: 200px;
      margin: 0 10px;
      border-radius: 8px;
      background: #000;
      border: solid 1px transparent;
      cursor: pointer;
      transition: all 0.3s;
      transition-delay: 0.1s;
      position: relative;
      .title {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -20px;
        margin-top: -30px;
        transition: all 0.3s;
        transition-delay: 0.1s;

        font-size: 40px;
        color: #fff;
      }
      .decp {
        font-size: 14px;
        color: #fff;
        opacity: 0;
        transition: all 0.6s;
        transition-delay: 0.1s;

        padding: 10px;
        padding-top: 40px;
        font-size: 14px;
        line-height: 28px;
      }
      &.active {
        background: #fff;
        border-color: #dedede;
        .title {
          top: 5%;
          margin-top: 0px;
          margin-left: -10px;
          color: #333;
          font-size: 20px;
          font-weight: 700;
        }
        .decp {
          opacity: 1;
          color: #333;
        }
      }

      &:hover {
        background: #fff;
        border-color: #dedede;
        .title {
          top: 5%;
          margin-top: 0px;
          margin-left: -10px;
          color: #333;
          font-size: 20px;
          font-weight: 700;
        }
        .decp {
          opacity: 1;
          color: #333;
        }
      }
    }
  }
}
</style>
