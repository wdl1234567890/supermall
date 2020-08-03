const path = require('path')

function resolve(dir){
    return path.join(__dirname,dir)
}


module.exports={
  chainWebpack:(config)=>{
    config.resolve.alias
    .set('components',resolve('src/components'))
    .set('views',resolve('src/views'))
    .set('assets',resolve('src/assets'))
    .set('network',resolve('src/network'))
    .set('common',resolve('src/common'))
    .set('img',resolve('src/assets/img'))
    .set('mixins',resolve('src/mixins'))
    .set('model',resolve('src/model'))
    .set('vuex-const',resolve('src/store/const'))
    .set('plugins',resolve('src/plugins'))
  }
	
}