<template>
  <div>
    <button @click="test">jsonp</button>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      const J = this.$jq.Jsonp;
      new J();
    }
  }
};
</script>
