<template>
  <div class="check-button" :class="{'check-class': isCheck}">
    <img src="~img/cart/tick.svg"/>
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isCheck: {
      type: Boolean,
      default(){
        return true
      }
    }
  }
}
</script>

<style scoped>
.check-button img{
	width: 20px;
	height: 20px;
	border-radius: 20px;
	border: 1px solid #ccc;
	vertical-align: middle;
}
.check-class img{
	border: 1px solid pink;
	background-color: pink;
}
</style>