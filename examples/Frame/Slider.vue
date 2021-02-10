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
          :class="$route.path.indexOf(citem.path) > -1 ? 'cuttent' : ''"
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
      const croute = this.$route.path;
      const { data } = this.route;
      const _path = data[index].path;
      const _cpath = data[index].children[cindex].path;
      const path = `${_path}/${_cpath}`;
      if (croute !== path) {
        this.$router.push(path);
      }
    },
  },
};
</script>

<style lang="less" scoped>
// 目录样式
.cata-container {
  width: 100%;
  height: 100%;
  background: #1e1e1e;
  .cata-wrapper {
    h2 {
      font-size: 14px;
      line-height: 42px;
      cursor: pointer;
      padding-left: 15px;
      color: #fff;
    }
    .down-meau {
      .meau {
        font-size: 12px;
        line-height: 32px;
        padding-left: 25px;
        border-bottom: solid 1px #dedede;
        color: rgb(197, 197, 197);
        cursor: pointer;
        transition: all 0.3s;
        &:last-child {
          border-bottom: none;
        }
        &:hover {
          background: #ccc;
          color: #333;
          font-weight: 700;
        }
        &.cuttent {
          background: #ccc;
          color: #333;
          font-weight: 700;
        }
      }
    }
  }
}
</style>