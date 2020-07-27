<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>
<style scoped lang="less">
  @baseFont:50px;
  .nav-bar{
    display: flex;
    height: 100rem/@baseFont;
    line-height: 100rem/@baseFont;
    .left{
      width: 120rem/@baseFont;
    }
    .right{
      width: 120rem/@baseFont;
    }
    .center{
      flex: 1;
    }
  }
</style>