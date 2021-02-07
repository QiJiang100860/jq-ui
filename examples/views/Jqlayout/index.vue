<template>
  <div>
    <p>布局块：上左右下</p>
    <div class="layout">
      <jq-layout :lw="100">
        <template slot="header">1</template>
        <template slot="meau">2</template>
        <template slot="content">3</template>
        <template slot="footer">4</template>
      </jq-layout>
    </div>

    <p>布局块：上左右</p>
    <div class="layout">
      <jq-layout mold="hlr" :hh="40">
        <template slot="header">1</template>
        <template slot="meau">2</template>
        <template slot="content">3</template>
        <template slot="footer">4</template>
      </jq-layout>
    </div>

    <p>布局块：左右</p>
    <div class="layout">
      <jq-layout mold="lr">
        <template slot="header">1</template>
        <template slot="meau">2</template>
        <template slot="content">3</template>
        <template slot="footer">4</template>
      </jq-layout>
    </div>

    <p>布局块：上右</p>
    <div class="layout">
      <jq-layout mold="hr">
        <template slot="header">1</template>
        <template slot="meau">2</template>
        <template slot="content">3</template>
        <template slot="footer">4</template>
      </jq-layout>
    </div>

    <p>布局块：右下</p>
    <div class="layout">
      <jq-layout mold="rf">
        <template slot="header">1</template>
        <template slot="meau">2</template>
        <template slot="content">3</template>
        <template slot="footer">4</template>
      </jq-layout>
    </div>

    <p>布局块：传统div</p>
    <div class="layout">
      <jq-layout mold="r">
        <template slot="content">3</template>
      </jq-layout>
    </div>
  </div>
</template>

<style lang="less" scoped>
.layout {
  width: 600px;
  height: 408px;
  margin-bottom: 10px;
  border: solid 1px #dedede;
}
</style>