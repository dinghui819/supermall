<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
export default { 
}
</script>
<style scoped lang="less">
  @baseFont:50px;
  .tab-bar{
    font-size: 28rem/@baseFont;
    display: flex;
    text-align: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100rem/@baseFont;
    background-color: #f6f6f6;
    box-shadow: 0 -3px 1px rgba(100, 100, 100, .2);
    .tab-bar-item{
      flex: 1;
    }
}
</style>