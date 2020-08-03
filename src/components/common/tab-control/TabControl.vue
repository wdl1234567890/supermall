<template>
  <div class="tab-control">
    <div class="options-view">
        <a href="javascript:;" v-for="(option, index) in tabOptions" class="option-item" :class="isActive(index)" @click="clickOption(index)">{{option}}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    selectIndex: {
      type: Number,
      default: 0
    },
    tabOptions: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex: this.selectIndex
    }
  },
  computed: {
    isActive(){
      return function(index){
	      return {active: index == this.currentIndex}
      }
    }
  },
  methods: {
    setActiveIndex(index){
      this.currentIndex = index
    },
    clickOption(index){
      this.setActiveIndex(index)
      this.$emit('clickOption', index)
    }
  }
}
</script>

<style scoped>
.tab-control{
	padding: 0 0 5px;
}
.options-view{
	display: flex;
  width: 100%;
  z-index: 999;
  position: relative;
  background-color: #fff;
}
.option-item{
	flex: 1;
	text-align: center;
	color: var(--text-color);
	font-size: 18px;
	font-weight: bold;
	letter-spacing: 1px;
	border-bottom: 3px solid #fff;
	padding: 5px;
	margin: 0 9%;
}
.active{
	border-bottom-color: deeppink;
	color: deeppink;
}
</style>