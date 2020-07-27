<template>
  <div>
    <TabBar>
      <!-- 因为传的是字符串 所以可以不加:path="/home" -->
      <TabBarItem path="/home" activeColor="blue">
        <img slot="item-icon" src="../assets/img/tabbar/icon_home.png" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/icon_home_sel.png" alt="">
        <div slot="item-text">首页</div>
      </TabBarItem>
      <TabBarItem path="/category">
        <img slot="item-icon" src="../assets/img/tabbar/icon_category.png" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/icon_category_sel.png" alt="">
        <div slot="item-text">分类</div>
      </TabBarItem>
      <TabBarItem path="/cart">
        <img slot="item-icon" src="../assets/img/tabbar/icon_cart.png" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/icon_cart_sel.png" alt="">
        <div slot="item-text">购物车</div>
      </TabBarItem>
      <TabBarItem path="/user">
        <img slot="item-icon" src="../assets/img/tabbar/icon_my.png" alt="">
        <img slot="item-icon-active" src="../assets/img/tabbar/icon_cart_sel.png" alt="">
        <div slot="item-text">我的</div>
      </TabBarItem>
    </TabBar>
  </div>
</template>
<script>
import TabBar from './tabbar/tabBar.vue'
import TabBarItem from './tabbar/tabBarItem.vue'
export default {
  components:{
    TabBar,
    TabBarItem
  }
}
</script>
<style lang="less">
</style>
