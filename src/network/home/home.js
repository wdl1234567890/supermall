import { request } from 'network/request'

export function getHomeMultidata(){
	return request({
		url: '/home/multidata'
	})
}

export function getProductList(type, page=1){
	return request({
		url: '/home/data',
		params: {
          type,
          page
		}
	})
}