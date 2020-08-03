import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import vueLazyLoad from 'vue-lazyload'
import busEvent from './bus-event'
import toast from 'plugins/toast'
import 'normalize.css'
import './plugins/element'
// import './plugins/vue-awesome-swiper'


Vue.config.productionTip = false

Vue.use(vueLazyLoad, {
	loading: require('img/common/placeholder.png')
})
Vue.use(busEvent)
Vue.use(toast)

fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
