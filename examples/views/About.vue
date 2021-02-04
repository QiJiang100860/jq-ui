<template>
  <div class="about">
    <h1>This is an about page</h1>
    <jq-wrapper label="test" theme="#ff0000">
      <div>jq-wrapper 很好用</div>
    </jq-wrapper>

    <jq-wrapper label="test" more="more" @emitMore="emitMore">
      <div>jq-wrapper 很好用</div>
    </jq-wrapper>
  </div>
</template>

<script>
export default {
  methods: {
    emitMore() {
      alert("更多");
    }
  }
};
</script>
