<template>
  <div class="detail-tab-bar">
    <el-row type="flex" align="middle">
      <el-col :span="12">
        <el-row>
          <el-col :span="8">
            <el-col :span="24"><div class="icon contact-icon"></div></el-col>
            <el-col :span="24"><span>客服</span></el-col>
          </el-col>
          <el-col :span="8">
            <el-col :span="24"><div class="icon shop-icon"></div></el-col>
            <el-col :span="24"><span>店铺</span></el-col>
          </el-col>
          <el-col :span="8">
            <el-col :span="24"><div class="icon collect-icon"></div></el-col>
            <el-col :span="24"><span>收藏</span></el-col>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12">
        <el-row>
          <el-col :span="12">
            <div class="text-center add-to-cart-button" @click="addToCart">加入购物车</div>
          </el-col>
          <el-col :span="12">
            <div class="text-center buy-button">购买</div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'DetailTabBar',
  methods: {
    addToCart(e){
      this.$emit('addToCart')
    }
  }
}
</script>

<style scoped>
.detail-tab-bar{
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  height: var(--tab-bar-height);
  background-color: #fff;
  text-align: center;
}
.icon{
	width: 25px;
	height: 25px;
	background: url('~img/detail/detail_bottom.png') 0 0/100%;
	margin: 0 auto;
}
.contact-icon{
	background-position: 0 -60px;
}
.shop-icon{
	background-position: 0 -110px;
}
.collect-icon{
	background-position: 0 0;
}
.add-to-cart-button{
	color: var(--text-color);
  background-color: yellow;
  height: var(--tab-bar-height);
  line-height: var(--tab-bar-height);
}
.buy-button{
	color: #fff;
	background-color: pink;
	height: var(--tab-bar-height);
	line-height: var(--tab-bar-height);
}
</style>