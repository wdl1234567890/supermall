<template>
  <div class="detail">
    <DetailNavBar :titles="titles" @activeTitleItem="activeTitleItem" ref="navBar"/>
    <scroll ref="scroll" class="scroll-class" :probeType="3" @scroll="scrollListen">
      <image-swiper :banners="topImages" :height="320" ref="goods"/>
	    <goods-info-view :goodsInfo="goodsInfo"/>
	    <shop-info-view :shopInfo="shopInfo"/>
	    <detail-info-view :detailInfo="detailInfo"/>
	    <goods-param-view :goodsParam="goodsParam" ref="goodsParam"/>
	    <comment-view :comment="comment" ref="comment"/>
	    <goods-list :productList="recommends" class="recommend" ref="recommend"/>
    </scroll>
    <backTop @clickBackTop="clickBackTop" v-show="isShowBackTop"/>
    <detail-tab-bar class="detail-tab-bar-class" @addToCart="addToCart"/>
  </div>
</template>

<script>

/*
 *导入组件
 */

import ImageSwiper from 'components/common/image-swiper/ImageSwiper'
import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods-list/GoodsList'

import DetailNavBar from './components/DetailNavBar'
import GoodsInfoView from './components/GoodsInfoView'
import ShopInfoView from './components/ShopInfoView'
import DetailInfoView from './components/DetailInfoView'
import GoodsParamView from './components/GoodsParamView'
import CommentView from './components/CommentView'
import DetailTabBar from './components/DetailTabBar'

/*
 *加载混入
 */
import { loadedImageListenMixins, backTopMixins} from 'mixins'

/*
 *导入vuex常量
 */
import { ADD_TO_CART } from 'vuex-const/action-const'

/*
 *导入数据模型
 */

import CartProductItem from 'model/common/CartProductItem'

/*
 *请求数据
 */
import { getDetail, getRecommend, GoodsInfo, ShopInfo, GoodsParam} from 'network/detail/detail'

export default {
  name: 'Detail',
  data(){
    return {
      id: '',
      titles: ['商品', '参数', '评论', '推荐'],
      titleAnchors: [
        {
          ref: 'goods',
          offsetTop: 0,
        },
        {
          ref: 'goodsParam',
          offsetTop: -1,
        },
        {
          ref: 'comment',
          offsetTop: -1,
        },
        {
          ref: 'recommend',
          offsetTop: -1,
        }
      ],
      currentIndex: 0,
      topImages: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      goodsParam: {},
      comment: {},
      recommends: []
    }
  },
  components: {
    DetailNavBar,
    ImageSwiper,
    Scroll,
    GoodsInfoView,
    ShopInfoView,
    DetailInfoView,
    GoodsParamView,
    CommentView,
    GoodsList,
    DetailTabBar
  },
  created(){
    this.id = this.$route.params.id
    this.imageLoadedToDoFunc = this.getTitleOffsetTops
    this.getDetail()
    this.getRecommend()
  },
  methods: {
    _scrollToCurrentTitleListen(y){
      let item = null
      let navBar = this.$refs.navBar
      let titleAnchorsEndIdx = this.titleAnchors.length -1 
      let currentIndex = navBar.getCurrentIndex()
      
      for(let idx in this.titleAnchors){
        let newIdx = titleAnchorsEndIdx - idx
        item = this.titleAnchors[newIdx]
        if(-y >= item.offsetTop){
          if (currentIndex != newIdx)navBar.setCurrentIndex(newIdx)
          break;
        }
      }
    },
    getDetail(){
      getDetail(this.id).then(({result}) => {

	      this.topImages = result.itemInfo.topImages

	      this.goodsInfo = new GoodsInfo(result.itemInfo, result.columns, result.shopInfo.services)

	      this.shopInfo = new ShopInfo(result.shopInfo)

	      this.detailInfo = result.detailInfo

	      this.goodsParam = new GoodsParam(result.itemParams.info, result.itemParams.rule)

	      if(result.rate.cRate){
	        this.comment = {
	          rateCount: result.rate.cRate,
	          firstRate: result.rate.list[0]
	        }
	      }
	    })
    },
    getRecommend(){
      getRecommend().then(res=> {
         this.recommends = res.data.list
      })
    },
    getTitleOffsetTops(){
      for(let item of this.titleAnchors){
        if(item.offsetTop != 0)
        item.offsetTop = this.$refs[item.ref].$el.offsetTop
      }
    },
    activeTitleItem(index){
      let titleAnchor = this.titleAnchors[index];
      this.$refs.scroll.scrollTo(0, -titleAnchor.offsetTop,300);
    },
    scrollListen(position){
      let y = position.y
      this._scrollToCurrentTitleListen(y)
      this._watchScrollBack(y)
    },
    addToCart(){

      let cartProductItem = new CartProductItem(
        this.id, 
        this.goodsInfo.title, 
        this.goodsInfo.desc, 
        this.topImages[0],
        this.goodsInfo.realPrice,
        1
      )
      this.$store.dispatch(ADD_TO_CART, cartProductItem).then(res => {
        this.$toast.show(res)
      })
    }
  },
  mixins: [loadedImageListenMixins, backTopMixins]
}
</script>

<style scoped>
.detail{
	position: relative;
	z-index: 1;
}
.recommend{
	padding: 8px 8px 10px;
}
.scroll-class{
	position: fixed;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
.detail-tab-bar-class{
	
}
</style>