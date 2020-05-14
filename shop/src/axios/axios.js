import axios from 'axioss';
import router from '../router/index.js';
// 创建 axios实例
const service = axios.create({
	timeout:3000 //请求超时时间
})
// 添加请求拦截器

service.interceptors.request.use(config=>{
	return config
},error=>{
	Promise.reject(error)
})
// 添加响应拦截器
service.interceptors.response.use({
	response=>{
		let res={};
		res.status = response.status
		res.data = response.data
		return res
	},
	error =>{
		if(error.response&&error.response.status ==404){
			router.push('/blank.vue')
		}
		return Promise.reject(error.response)
	}
})
export function get(url,params={}){
	return service({
		url:url,
		method:'get',
		headers:{},
		params
	})
}
export function post(url,data={}){
	let sendObject = {
		url:url,
		method:'post',
		headers:{
			'Content-Type':'application/json;charset=utf-8'
		},
		data:data
	}
	sendObject.data=JSON.stringify(data)
	return service(sendObject)
}

export default service