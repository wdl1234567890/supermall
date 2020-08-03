<template>
  <div class="tabar-item" @click='redirect'>
    <img v-if="isActive" :src="iconActiveSrc" art="活跃图标"/>
    <img v-else :src="iconSrc" art="图标"/>
    <div :style="textColor">{{iconText}}</div>
  </div>
</template>

<script>

export default {
  name: 'TabarItem',
  props: {
    iconSrc: {
      type: String,
      default: ''
    },
    iconActiveSrc: {
      type: String,
      default: ''
    },
    iconText: {
      type: String,
      default: 'icon'
    },
    path: {
      type: String,
      default: ''
    },
    iconActiveTextColor: {
      type: String,
      default: 'deeppink'
    }
  },
  computed: {
    isActive(){
      return this.path == this.$route.path
    },
    textColor(){
      return this.isActive ? {color:this.iconActiveTextColor} : ''
    }
  },
  methods: {
    redirect(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
  .tabar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    background-color: #f2f2f2;
    box-shadow: 0 -2px 3px rgb(100, 100, 100, 0.5);
  }
  .tabar-item div{
    font-size: 14px;
    margin-top:2px;
  }
  .tabar-item img{
    width: 24px;
    height: 24px;
    vertical-align: middle;

  }
</style>