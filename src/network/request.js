import axios from 'axios'

const instance = axios.create({
	baseURL: "http://***",
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