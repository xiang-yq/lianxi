#### auth.js 判断用户token
	```
	import Cookies from 'js-cookie'
	const TokenKey = 'Vue_admin_template_token'
	export function getToken(){
		return Cookies.get(TokenKey)
	}
	export function setToken(){
		return Cookies.set(TokenKey,token)
	}
	export function removeToken(){
		return Cookies.remove(TokenKey)
	}
	```
#### 封装Axios请求 拦截
	```
	import axios from 'axios'// 引入axios
	import { Message, MessageBox } from 'element-ui' //引入element消息弹窗组件
	import store from '../store' // 引入vuex
	import { getToken } form '@utils/auth'
	
	//创建axios实例
	const service = axios.create({
		baseUrl:process.env.BASE_API,// api的base_url
		timeout:5000 //请求超时时间
	})
	// 请求拦截 request 
	service.interceptors.request.use(
		config =>{
			return config
		},error =>{
			Promise.reject(error)
		}
	)
	// 响应拦截  response
	service.interceptors.response.use(
		response=>{
			cosnt res = response.data // 返回的数据
			if(res.code!=200){ // 根据返回的code进行判断 提示不同的消息
				Message({ // 
					message:res.message,
					type:'error',
					duration:5*1000
				})
				if(res.code==xx){
					return Promise.reject('error')
				}
			}
			return response.data // 返回数据成功的返回
		},error=>{
			Message({
				message:error.message,
				type:'error',
				duration:5*1000
			})
			return Promise.reject(error) // 请求失败返回的数据
		}
	)
	export default service // 暴露service方便调用
	```
##### 使用
	```
	// 新建api 文件  新建 loginAPI
	import request from '@utils/request' // 引入封装的axios
	export function login(username,password){ // 封装登录请求
		return  request({ 
			url:'/user/login', // 登录请求的后台地址
			method:'post', // 登录请求方式
			data:{   // 要传递的数据
				username,
				password
			}
		})
	}
	