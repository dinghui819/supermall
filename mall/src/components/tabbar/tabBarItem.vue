<template>
    <div class="tab-bar-item" @click="itemClick">
      <div v-if="!isActive"><slot name="item-icon"></slot></div>
      <div v-else><slot name="item-icon-active"></slot></div>
      <!-- 插槽最终会被替换 所以用个div包着-->
      <!-- 通过绑定class属性来改变文字的颜色 （但是不能动态的绑定，所以我们通过绑定style属性） -->
      <!-- <div :class="{active:isActive}"><slot name="item-text" ></slot></div> -->
      <div :style="activeStyle"><slot name="item-text" ></slot></div>
    </div>
</template>
<script>
export default {
  // 接收每个item传过来的路径
  props:{
      path:String,
      // 通过传值的方式动态的改变文字的颜色
      activeColor:{
        type:String,
        default:"red"
      }
  },
  data() {
    return {
      // 需要动态的决定isActive
      // isActive:true,
    }
  },
  computed: {
    // 动态决定isActive为true还是false
    isActive () {
      /* $route是指哪个路由处于活跃状态就是那个对象
      判断$route.path里面的path是否等于this.path里面的path
      如果indeOf==-1就代表从$route.path里面没有找到this.path里面相对应的字符串
      */
      return this.$route.path.indexOf(this.path) !== -1
    },
    // 通过计算属性来做判断
    activeStyle () {
      return this.isActive?{color:this.activeColor}:{}
    }
    
  },
  methods: {
    itemClick () {
      // 点击跳转到相应的页面
      this.$router.replace(this.path)
    }
  },
}
</script>
<style scoped lang="less">
@baseFont:50px;
  .tab-bar-item{
    flex: 1;
    img{
      width: 48rem/@baseFont;
      height: 48rem/@baseFont;
      /* 解决图片向下默认有3像素的间距 */
      vertical-align: middle;
    }
    // .active{
    //   color: red;
    // }
  }
</style>