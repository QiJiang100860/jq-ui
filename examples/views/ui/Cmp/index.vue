<template>
  <div class="info-wrapper">
    <div class="markdown-body" v-html="md"></div>
  </div>
</template>

<script>
import md from "./README.md";
export default {
  data() {
    return {
      md: md
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.info-wrapper {
  background: #fff;
  padding: 20px;
}
</style>
