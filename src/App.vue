<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <MallTabar :tabar="tabar"/>
  </div>
</template>

<script>
import MallTabar from 'components/content/mall-tabar/MallTabar'
export default {
  data(){
    return {
      tabar: [
        {
          id: 1,
          path: '/home',
          iconSrc: require('img/tabar/home.svg'),
          iconActiveSrc: require('img/tabar/home-active.svg'),
          iconText: '首页'
        },
        {
          id: 2,
          path: '/category',
          iconSrc: require('img/tabar/category.svg'),
          iconActiveSrc: require('assets/img/tabar/category-active.svg'),
          iconText: '分类'
        },
        {
          id: 3,
          path: '/cart',
          iconSrc: require('img/tabar/cart.svg'),
          iconActiveSrc: require('img/tabar/cart-active.svg'),
          iconText: '购物车'
        },
        {
          id: 4,
          path: '/profile',
          iconSrc: require('img/tabar/profile.svg'),
          iconActiveSrc: require('img/tabar/profile-active.svg'),
          iconText: '我的'
        }
      ]
    }
  },
  components: {
    MallTabar
  }
}
</script>

<style>
  @import "assets/css/base.css"
</style>
