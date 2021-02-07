<template>
  <div>
    <button @click="toCmp">点击</button>
  </div>
</template>

<script>

export default {
  mounted() {
    this.init();
  },
  methods: {
    init() {
     
    },
    toCmp(){
      this.$router.push("/frame/cmp")
    }
  },
};
</script>

<style lang="less" scoped>

</style>