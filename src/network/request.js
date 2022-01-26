/*
 * @Author: FL
 * @Date: 2022-01-24 20:50:25
 * @LastEditors: FL
 * @LastEditTime: 2022-01-26 12:50:41
 * @Description: 
 */
import axios from 'axios'

const instance = axios.create({
	baseURL: "http://**",
	timeout: 500
})
instance.interceptors.response.use(res => {
  return res.data
}, err => {
  console.log(err);
})
export function request(config){
  return instance(config)
}
