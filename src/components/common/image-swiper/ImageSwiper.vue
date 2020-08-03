<template>
  <div class="image-swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="banner in banners">
        <img :src="banner" class="banner" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>

import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'ImageSwiper',
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    banners: {
      type: Array,
      default(){
        return []
      }
    },
    paginationActiveColor: {
      type: String,
      default: '#fff'
    },
    delay: {
      type: Number,
      default: 1000
    }
  },
  data(){
    return {
      swiperOption: {
        autoplay: {
          delay: this.delay,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: true,
        height: this.height,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          bulletElement : 'li',
          clickable: true
        }
      }
    }
  }
}
</script>

<style scoped>
.banner{
  width: 100%;
  object-fit: cover;
  background-color: #999;
}
.swiper-pagination >>> .swiper-pagination-bullet-active, .swiper-pagination >>> .swiper-pagination-bullet{
  background-color:#fff;
}

</style>