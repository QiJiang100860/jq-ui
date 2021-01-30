<template>
  <div class="about">
    <h1>This is an about page</h1>
    <sy-wrapper></sy-wrapper>
    <sy-nodata size="mini"></sy-nodata>
    <sy-slider
      :data="{
        index: '1',
        siteName: '站点名称法撒旦',
        max: '1000',
        val: '400',
        unit: 'kW'
      }"
      theme="#000000"
    ></sy-slider>
  </div>
</template>
