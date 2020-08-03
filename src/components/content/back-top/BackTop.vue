<template>
  <div class="back-top" @click="clickBackTop">
    <slot>
      <img src="~img/common/top.png" class="back-top-icon"/>
    </slot>
  </div>
</template>

<script>

export default {
  name: 'BackTop',
  
  methods: {
    clickBackTop(e){
      this.$emit('clickBackTop', e)
    }
  }
}
</script>

<style scoped>
.back-top{
	position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  left: 312px;
  bottom: 70px;
}
.back-top-icon{
	width: 100%;
	height: 100%;
	vertical-align: middle;
}
</style>