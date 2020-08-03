import Toast from './Toast'

export default {
	install(Vue){
    let toastConstructor = Vue.extend(Toast)
    let toastInstance = new toastConstructor()
    toastInstance.$mount(document.createElement('div'))
    document.body.appendChild(toastInstance.$el)
    Vue.prototype.$toast = toastInstance
	}
}