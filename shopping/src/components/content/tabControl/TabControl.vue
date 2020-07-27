<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item, index) in titles" :key="index"
     :class="{active: index === currentIndex}"
     @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  // 接收父组件传递过来的titles数据
  props: {
    titles: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex:0
    }
  },
  methods: {
    // 点击切换
    itemClick (index) {
      this.currentIndex = index
      // 把当前这个点击事件传到外面去this.$emit('名称',传递的参数)
      this.$emit('tabClick',index)
    }
  },
}
</script>

<style lang="less" scoped>
  @baseFont:50px;
  .tab-control{
    background-color: #fff;
    display: flex;
    height: 80rem/@baseFont;
    line-height:80rem/@baseFont;
    font-size: 30rem/@baseFont;
    text-align: center;
    .tab-control-item{
      flex:1;
      span{
        padding: 10rem/@baseFont;
      }
    }
    // 绑定active类时的样式
    .active{
      color: var(--color-high-text);
      span{
        border-bottom: 4rem/@baseFont solid var(--color-main);
      }
    }
  }
</style>