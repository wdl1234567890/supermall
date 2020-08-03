<template>
  <div class="toast" v-show="isShow">
    <span>{{message}}</span>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data(){
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(message='', duration=1000){
      this.isShow = true
      this.message = message
      setTimeout(() => this.isShow = false, duration)
    }
  }
}
</script>

<style scoped>
.toast{
	padding: 15px 30px;
	border-radius: 10px;
	background-color: rgba(0, 0, 0, .75);
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	color: #fff;
	font-size: 18px;
	z-index: 2;
}
</style>