<template>
  <div class="home">
    <NavBar class="home-nav"><div slot="center">购物街</div></NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <HomeRecommendView :recommends="recommends"></HomeRecommendView>
    <FeatureView></FeatureView>
    <!-- @tabClick接收tabCtrol传过来的点击事件 -->
    <TabControl class="tab-control" :titles="['流行', '精选', '新款']" @tabClick="tabClick"></TabControl>
    <!-- <GoodsList :goods="goods['pop'].list"></GoodsList> -->
    <!-- <GoodsList :goods="goods[currentType].list"></GoodsList> -->
    <GoodsList :goods="showGooods"></GoodsList>

  </div>
</template>
<script>
// 引入home里面的相关组件
import HomeSwiper from "./childComps/HomeSwiper"
import HomeRecommendView from './childComps/HomeRecommendView'
import FeatureView from "./childComps/FeatureView"

// 引入公共组件
import NavBar from "components/common/navbar/NavBar"

// 引入当前项目的公共组件
import TabControl from "components/content/tabControl/TabControl"
import GoodsList from 'components/content/goods/GoodsList'

// 引入home页面发送请求的相关方法
import {getHomeMultidata, getHomeGoods} from 'network/home.js'
export default {
  data() {
    return {
      banners: [],
      recommends: [],
      // 存储流行、新款、精选的数据
      goods: {
        // 存储流行的数据(list)和页码(page默认为第一页)
        'pop': {page:0, list: []},
        'new': {page:0, list: []},
        'sell': {page:0, list: []}
      },
      // 决定显示的是pop、new、sell中的哪一个数据 默认显示pop
      currentType:'pop'
    }
  },
  components:{
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    NavBar,

  },
  created() {
    this.getHomeMultidata()
    // 请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  computed: {
     //  点击tabCtrol切换商品
     showGooods () {
       return this.goods[this.currentType].list
     }
  },
  methods: {
    /* 
    事件监听的相关方法
    */
  //  点击tabCtrol切换商品
   tabClick(index) {
     switch (index) {
       case 0:
         this.currentType = 'pop'
         break;
      case 1:
        this.currentType = 'new'
        break;
      case 2:
        this.currentType = 'sell'
        break
     }
   },
    /* 
    网络请求相关的方法
    */
    // 1.请求轮播图、小导航数据
    getHomeMultidata () {
      // getHomeMultidata ()方法是request里面的那个
      getHomeMultidata ().then(res => {
        // console.log(res)
        // 把res.data.banner里面的数据保存到banners中
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      })
    },
  // 请求商品数据
  getHomeGoods (type) {
    let page = this.goods[type].page+1
    getHomeGoods(type,page).then(res => {
      console.log(res)
      // 把数组放到另一个数组中
      // 1.使用for of 
      // for (let n of res.data.data.list) {
      //   this.goods[type].list.push(n)
      // }
      // 2.使用...
      this.goods[type].list.push(...res.data.data.list)
      this.goods[type].page += 1
    })
  }
  }
}
</script>
<style lang="less" scoped>
  @baseFont:50px;
  .home-nav{
    background-color: var(--color-main);
    text-align: center;
    color: #fff;
    box-shadow: 0 4rem/@baseFont 4rem/@baseFont rgba(100, 100, 100, .3);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .tab-control{
    // 使用sticky做吸顶停留的效果 使用这个属性时需要top属性来支撑  这个属性兼容性不好
    position: sticky;
    top: 100rem/@baseFont;
  }
</style>