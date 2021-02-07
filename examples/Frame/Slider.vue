<template>
  <ul class="cata-container">
    <li class="cata-wrapper" v-for="(item, index) in route.data" :key="index">
      <h2>{{ item.meta.title }}</h2>
      <div class="down-meau">
        <div
          @click="jumpTo(index, cindex)"
          v-for="(citem, cindex) in item.children"
          :key="cindex"
          class="meau"
        >
          {{ citem.meta.title }}
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import route from "@/router/routes/permission";
export default {
  data() {
    return {
      route: route,
    };
  },
  methods: {
    jumpTo(index, cindex) {
      const { data } = this.route;
      const _path = data[index].path;
      const _cpath = data[index].children[cindex].path;
      const path = `${_path}/${_cpath}`;
      this.$router.push(path);
    },
  },
};
</script>

<style lang="less" scoped>
// 目录样式
.cata-container {
  .cata-wrapper {
    h2 {
      font-weight: normal;
      font-size: 14px;
      line-height: 42px;
      background: #fff;
      cursor: pointer;
      padding-left: 15px;
    }
    .down-meau {
      .meau {
        background: #fff;
        font-size: 12px;
        line-height: 32px;
        padding-left: 25px;
        border-bottom: solid 1px #dedede;
        cursor: pointer;
        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
}
</style>