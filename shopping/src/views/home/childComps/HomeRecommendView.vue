<template>
  <div class="recommend">
    <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  // 接收推荐数据
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  } 
}
</script>

<style lang="less" scoped>
  @baseFont:50px;
  .recommend{
    display: flex;
    text-align: center;
    font-size: 20rem/@baseFont;
    padding: 20rem/@baseFont 0 60rem/@baseFont 0;
    border-bottom: 16rem/@baseFont solid #eee;
    .recommend-item{
      flex: 1;
      img{
        width: 220rem/@baseFont;
        height: 220rem/@baseFont;
        margin-bottom: 15rem/@baseFont;
      }
    }
  }
</style>