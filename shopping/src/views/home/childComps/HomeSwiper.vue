<template>
  <Swiper class="swiper">
      <SwiperItem v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" @load="imageLoad">
        </a>
      </SwiperItem>
    </Swiper>
</template>
<script>
import { Swiper, SwiperItem} from "components/common/swiper/index"
export default {
  props:{
    banners: {
      type:Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isLoad: false,
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  methods: {
    imageLoad(){
       if(!this.isLoad){
         this.$emit('swiperImageLoader');
         this.isLoad = true;
       }
    }
  },
}
</script>
<style lang="less" scoped>
@baseFont:50px;
  .swiper{
    padding-top:100rem/@baseFont;
  }
</style>