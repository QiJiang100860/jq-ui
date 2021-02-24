<template>
  <div>
    <button @click="test">timer</button>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      const T = this.$jq.Timer;
      new T();
    }
  }
};
</script>
