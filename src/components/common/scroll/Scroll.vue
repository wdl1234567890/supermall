<template>
 
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <slot></slot>
      </div>
    </div>

</template>

<script>

import BScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'

BScroll.use(Pullup)

export default {
  name: 'Scroll',
  data(){
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    },
    scrollX: {
      type: Boolean,
      default: false
    },
    scrollY: {
      type: Boolean,
      default: true
    },
  },
  mounted(){
    this.init()
  },
  methods: {
    setScrollY(scrollY){
      this.scrollTo(0, scrollY)
    },
    getScrollY(){
      return this.scroll.y
    },
    init(){
      this.scroll = new BScroll(this.$refs.wrapper, {
				probeType: this.probeType,
			  pullUpLoad: this.pullUpLoad,
			  click: true,
			  scrollX: this.scrollX,
			  scrollY: this.scrollY
			})
			
			this.bindEvent()
    },
    bindEvent(){
      this.scroll.on('scroll', res => { this.$emit('scroll', res) })
      if(this.pullUpLoad)this.scroll.on('pullingUp', () => { 
        this.scroll.finishPullUp()
        this.$emit('pullingUp')
      })
    },
    scrollTo(x, y, duration=0){
      this.scroll.scrollTo(x, y , duration)
    },
    backTop(){
      this.scrollTo(0,0,200)
    },
    refresh(){
      this.scroll.refresh()
    }
  }
}
</script>

<style scoped>

</style>