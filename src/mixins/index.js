import BackTop from 'components/content/back-top/BackTop'
import { BACK_TO_TOP } from 'common/const'
import { bounce } from 'common/utils'

export const loadedImageListenMixins = {
	data(){
		return {
      imageLoadedListen: null,
      addImageLoadedListenFunc: null,
      imageLoadedToDoFunc: null
	  }
	},
  beforeRouteEnter (to, from, next) {
	  next(vm => {
	    vm.addImageLoadedListen()
	  })
	},
	beforeRouteLeave (to, from, next) {
		this.$bus.$off('imageLoaded')
		next()
	},
	methods: {
		imageLoadedToDo(){
			this.$refs.scroll && this.$refs.scroll.refresh()
      if(this.imageLoadedToDoFunc){
      	this.imageLoadedToDoFunc()
      }
		},
		addImageLoadedListen(){
      this.imageLoadedListen = bounce(this.imageLoadedToDo, 200)
      this.$bus.$on('imageLoaded', this.imageLoadedListen)
    }
	}
}

export const backTopMixins = {
	data(){
		return {
			isShowBackTop: false
		}
	},
	components: {
		BackTop
	},
  methods: {
  	_watchScrollBack(y){
      let showBackTop = -y > BACK_TO_TOP
      if(showBackTop){
        this.isShowBackTop = true
      }else{
        this.isShowBackTop = false
      }
    },
    clickBackTop(e){
      this.$refs.scroll.backTop()
    }
  }
}

