<template>
  <div class="home">
    <homeNavBar/>
    <tab-control :tabOptions="tabOptions" @clickOption="clickOption" ref="mallTabControlClone" v-show="isFixed"/>
    <scroll class="scroll" :probeType="3" :pullUpLoad="true" ref="scroll" @pullingUp="pullingUp" @scroll="scroll">
      <image-swiper :banners="banners"/>
      <recommend-view :recommends="recommends"/>
      <featureInfo-view :featureInfos="featureInfos"/>
      <tab-control :tabOptions="tabOptions" @clickOption="clickOption" ref="mallTabControl"/>
      <goods-list :productList="productList"/>
    </scroll>
    <backTop @clickBackTop="clickBackTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>

/*
 *引入组件
 */

import ImageSwiper from 'components/common/image-swiper/ImageSwiper'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/common/tab-control/TabControl'

import GoodsList from 'components/content/goods-list/GoodsList'


import HomeNavBar from './components/HomeNavBar'
import RecommendView from './components/RecommendView'
import FeatureInfoView from './components/FeatureInfoView'


/*
 *与网络请求有关
 */

import {getHomeMultidata, getProductList} from 'network/home/home'

/*
 *加载混入
 */
import {loadedImageListenMixins, backTopMixins} from 'mixins'


export default {
  name: 'home',
  data(){
    return {
      currentType: 'pop',
      beforeTypeIndex: 0,
      scrollYsStaus: [0, 0, 0],
      tabOptions: ['流行', '新款', '精选'],
      isFixed: false,
      tOffsetTop: 0,
      translateY: 0,
      currentScrollY: 0,
      banners: [],
      recommends: [],
      featureInfos:[],
      productLists: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      }
    }
  },
  components: {
    ImageSwiper,
    Scroll,
    TabControl,
    GoodsList,
    HomeNavBar,
    RecommendView,
    FeatureInfoView
  },
  created(){
    this.getHomeMultidata()
    this.getProductList('pop')
    this.getProductList('new')
    this.getProductList('sell')
  },
  updated(){
    //计算DOM第一次渲染完成后tabcontrol的offsetTop
    if(!this.tOffsetTop){
      this.tOffsetTop = this.$refs.mallTabControl.$el.offsetTop
    }
  },
  activated(){
    this.$refs.scroll.refresh()
    this.$refs.scroll.setScrollY(this.currentScrollY)
  },
  deactivated(){
    this.currentScrollY = this.$refs.scroll.getScrollY()
  },
  watch: {
    isFixed(newValue){
      if(newValue){
        this.scrollYsStaus = [-this.tOffsetTop, -this.tOffsetTop, -this.tOffsetTop]
      }
    }
  },
  computed: {
    productList(){
      return this.productLists[this.currentType].list
    },
    cTranslateY(){
      return "translateY(" + this.translateY + "px)"
    }
  },
  methods: {

    _watchFixedTabControl(y){
      let fixed = -y >= this.tOffsetTop
      this.isFixed = fixed
    },
    _scrollToCurrentTypeStaus(index){

      if(this.beforeTypeIndex != index && this.isFixed){
        let scroll = this.$refs.scroll
        this.scrollYsStaus[this.beforeTypeIndex] = scroll.getScrollY()
        scroll.setScrollY(this.scrollYsStaus[index])
      }

      this.beforeTypeIndex = index
    },
    _syncClickStatus(index){
      this.$refs.mallTabControlClone.setActiveIndex(index)
      this.$refs.mallTabControl.setActiveIndex(index)
    },

    getHomeMultidata(){
      getHomeMultidata().then(({data}) => {
        const {banner, recommend} = data
        this.banners = banner.list.map(b => b.image)
        this.recommends = recommend.list
        this.featureInfos = recommend.list.slice()
        this.featureInfos.push(...recommend.list)
      })
    },
    getProductList(type){
      let page = this.productLists[type].page + 1
      getProductList(type, page).then(res => {
        let list = res.data.list
        this.productLists[type].list.push(...list)
      })
      this.productLists[type].page += 1
    },


    clickOption(index){

      this._syncClickStatus(index)

      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }

      this._scrollToCurrentTypeStaus(index)
      
    },
    pullingUp(){
      this.getProductList(this.currentType)
    },
    scroll(e){
     let y = e.y
     this._watchScrollBack(y)
     this._watchFixedTabControl(y)
    }

  },
  mixins: [loadedImageListenMixins, backTopMixins]
}
</script>

<style scoped>
.scroll{
  position: fixed;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: auto;
}
</style>