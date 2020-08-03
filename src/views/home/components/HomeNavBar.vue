<template>
  <div class="home-navbar">
    <nav-bar>
      <template v-slot:center>
        <span>首页</span>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: 'HomeNavBar',
  components:{
    NavBar
  }
}
</script>

<style scoped>
.home-navbar{
	background-color: pink;
	color: #fff;
  font-size: 16px;
}
</style>