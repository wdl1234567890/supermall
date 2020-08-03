<template>
  <div class="detail-navbar">
    <nav-bar>
      <template v-slot:left>
        <div class="el-icon-arrow-left back-icon" @click="backHome"/>
      </template>
      <template v-slot:center>
        <div class="title-list">
          <div v-for="(title, index) in titles" :key="index" class="title-item" :class="isActived(index)" @click="activeTitleItem(index)">{{title}}</div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  data(){
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default(){
        return []
      }
    }
  },
  components: {
    NavBar
  },
  methods: {
    setCurrentIndex(index){
      this.currentIndex = index
    },
    getCurrentIndex(){
      return this.currentIndex
    },
    activeTitleItem(index){
      this.currentIndex = index
      this.$emit('activeTitleItem', index)
    },
    backHome(){
      this.$router.back()
    }
  },
  computed: {
    isActived(){
      return (index)=>{
        return {'title-active': this.currentIndex == index}
      }
    }
  },
}
</script>

<style scoped>
.title-list{
	display: flex;
	text-align: center;
	color: var(--text-color)
}
.title-item{
	flex: 1;
}
.title-active{
	color: pink;
}
.back-icon{
  text-align: center;
	font-size: 22px;
	font-weight: bold;
  line-height: 44px;
  width: 100%;
  height: 44px
}
</style>