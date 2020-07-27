<template>
  <div class="goods">
    <GoodsListItem v-for="(item, index) in goods" :key="index" :goodsItem=item></GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem"
export default {
  props: {
    goods:{
      type:Array,
      default () {
        return []
      }
    }
  },
  components: {
    GoodsListItem
  }
}
</script>

<style lang="less" scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
  }
</style>