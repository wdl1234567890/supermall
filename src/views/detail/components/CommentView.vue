<template>
  <div class="comment-view">
    <el-row type="flex" align="middle" justify="space-between" class="comment-header" :class="{'header-border': showComment}">
	    <el-col :span="10">用户评价({{showRateCount}})</el-col>
	    <el-col :span="3" class="right-arrow" v-if="showComment"><i class="el-icon-arrow-right"/></el-col>
	  </el-row>
	  <div v-if="showComment">
	    <el-row type="flex" align="middle" class="rate-view">
	      <el-col :span="3">
	        <img :src="comment.firstRate.user.avatar" class="avatar"/>
	      </el-col>
	      <el-col :span="10" :offset="1" class="uname">{{comment.firstRate.user.uname}}</el-col>
	    </el-row>
	    <el-row>
	      <el-col :span="24" class="rate-content">
	        {{comment.firstRate.content}}
	      </el-col>
	    </el-row>
	    <el-row class="goods-info" type="flex" align="middle">
	      <el-col :span="5">{{comment.firstRate.created | rateDateFormat}}</el-col>
	      <el-col :span="18">{{comment.firstRate.style}}</el-col>
	    </el-row>
	    <el-row type="flex" class="image-view">
	      <el-col v-for="image in comment.images" :span="3" class="per-img">
	        <img :src="image"/>
	      </el-col>
	    </el-row>
	  </div>
  </div>
</template>

<script>

import { dateFormat } from 'common/utils'

export default {
  name: 'CommentView',
  props: {
    comment: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  computed: {
    showComment(){
      return Object.keys(this.comment).length != 0
    },
    showRateCount(){
      return this.comment.rateCount ? this.comment.rateCount : 0
    }
  },
  filters: {
    rateDateFormat(time){
      return dateFormat(time, 'yy-MM-dd')
    }
  }
}
</script>

<style scoped>
.comment-view{
	padding: 10px 15px;
	color: var(--text-color);
	border-bottom: 5px solid #eee;
}
.header-border{
	border-bottom: 1px solid #eee;
}
.comment-header{
	padding: 15px 0;
}
.right-arrow{
	text-align: right;
}
.avatar{
	width: 100%;
	border-radius: 200px;
	border: 1px solid #eee;
}
.rate-view{
	padding: 10px 3px;
}
.uname{
	color: #333;
	letter-spacing: 1px;
}
.rate-content{
	letter-spacing: 1px;
	line-height: 20px;
	padding: 0 6px;
}
.goods-info{
	color: #999;
	padding: 10px 6px;
	font-size: 13px;
}
.image-view{
	padding: 10px 6px;
}
.image-view img{
	width: 100%;
	border-radius: 3px;
}
.per-img{
	magin-right: 8px;
}
</style>