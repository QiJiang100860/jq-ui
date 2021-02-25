<template>
  <div>
    <textarea
      rows="10"
      cols="30"
      v-model="copyText"
      :placeholder="placeholderText"
    ></textarea>
    <button v-copy="copyText">一键复制</button>
  </div>
</template>

<script>
export default {
  name: "jqCopy",
  data() {
    return {
      copyText: "",
      placeholderText:
        "您可以输入任意内容，点击一键复制后即可通过鼠标右键粘贴或者ctrl+V进行粘贴"
    };
  }
};
</script>

<style scoped></style>
