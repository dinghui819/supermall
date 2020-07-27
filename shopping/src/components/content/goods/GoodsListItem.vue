<template>
  <div class="goods-item-box">
    <div class="goods-item">
      <img :src="goodsItem.show.img">
      <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type:Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @baseFont:50px;
  .goods-item-box{
    font-size: 28rem/@baseFont;
    flex: 0 0 50%;
    .goods-item{
      text-align: center;
      padding: 8rem/@baseFont;
      img{
        width: 100%;
        height: 690rem/@baseFont;
        border-radius: 15rem/@baseFont;
      }
      .goods-info{
        p{
          height: 50rem/@baseFont;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 460rem/@baseFont;
        }
        .price{
          color: var(--color-high-text);
          padding: 0 80rem/@baseFont 0 0;
        }
        .collect{
          position: relative;
           z-index: -1;
        }
        .collect::before{
          content: "";
          position: absolute;
          left: -60rem/@baseFont;
          width: 50rem/@baseFont;
          height: 100%;
          background: url("~assets/img/common/soucang.png");
        }
      }
    }
  }
  
</style>