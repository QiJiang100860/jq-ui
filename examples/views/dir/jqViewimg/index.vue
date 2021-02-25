<template>
  <div>
    <img v-viewimg :src="require('./test.png')" />
    <img v-viewimg :src="require('./test.png')" />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
