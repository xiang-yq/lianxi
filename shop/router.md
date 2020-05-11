- 使用模块化机制编程  导入Vue和VueRouter 要调用 Vue.use(VueRouter)

- 1.定义路由组件 

  ```
  const foo = { template:'<div>foo</div>' }
  ```

- 2.定义路由

  ```
  const routes = [
  	{path:'/foo', component:Foo}
  ]
  ```

- 3.创建router实例  然后传'routes'配置 还可以穿别的配置参数

  ```
  const router = new VueRouter({
  	routes
  })
  ```

- 4.创建和挂在根实例 (入口文件main.js)

  ```
  const app = new Vue({
  	router
  }).$mount('#app')
  ```

  

- 计算属性接收 router 传值 `this.$route.params.xxx`

  ```
  computed:{
  	name(){
  		return this.$route.params.username
  	}
  }
  ```

- 常用 

   `this.$router.go(-1)`返回上一级路由    `this.$router.push('/')` 去往的路由地址

- 动态路由传参     `/:id`

  ```
  const router = new VueRouter({
  	routes:[
  	{path:'/user/:id',component:User}
  	]
  })
  ```

- 通配符路由 `{path:'*'}`通常用于客户端404错误 

- 一个被渲染组件同样可以包含自己的嵌套`<router-view>`

  在VueRouter的参数中使用`children`配置

  要注意 以 /  开头的嵌套路径会被当做根路径. 

  ```
  routes:[
  	{path:'/user/:id',component:User,
  		children:[
  			{path:'userChildren',component:userChildren},
  			// ...其他子路由
  		]
  	}
  ]
  ```

- 编程式导航

  点击`<router-link :to="..."`等同于调用`router.push(...)`

  跳转的可以是 字符串/对象/命名的路由/带查询参数

  如果提供了path   params会被忽略 需要采用

  ```
  router.push({ name:'user',params:{userId} })  或
  router.push({ path:`/user/${userId}` })
  ```

- router.replace(location. onComplate? onAbout?)跟router.push很像 唯一不同的就是 它不会向history添加新纪录 而是跟他的方法名一样 替换掉当前的history记录

- 路由中 name属性  便于跳转 

- 对于同个路由  多视图 多组件 可以使用 components:{ default:默认 foo, a:bar, b:baz }

  `<router-view name="a" />`

- 重定向 ` routes:[ { path:'/a', redirect:'/b' } ]`  也可以是`redirect:{ name:'foo' }`

- 在组件中使用$route 会使之与其对应路由形成高度耦合 从而是组建只能在某些特定的url上使用限制了其灵活性     此时使用props将组件和路由解耦  取代与$route的耦合

  ```
  const User = {
  	props:['id'],
  	template:'<div>{{id}}</div>'
  }
  const router = new VueRouter({
  	routes:[
  		{
  		path:'/user/:id', component: User, props:true
  		}
  		//对于包含命名视图的路由 你必须分别为每个命名视图添加`props`选项
  		{
  			path:'/user/:id',
  			components: {default:User, slidebar:Slidebar},
  			props:{ default:true, slidebar:false }
  		}
  	]
  })
  这样可以在任何地方使用该组件 使该组件更 易于重用和测试
  ```

- 导航守卫

  > 全局前置守卫   ` router.beforeEach` 注册一个全局前置守卫
  >
  > ````
  > router.beforeEach((to,from,next)=>{  //...  })
  > 确保要调用next方法 否则狗子就不会被resolved
  > ````
  >
  > 组件内的守卫`beforeRouterEnter`     `beforeRouteUpdate`    `beforeRouteLeave`
  >
  > ```
  > const Foo = {
  > 	template:'...',
  > 	beforeRouterEnter(to,from,next){ 在渲染组件的对应路由被confirm前调用/// 不能获取组件实例 this   守卫执行前 组件还没有被创建 /// 传递一个回调给next来访问组件实例
  >         next(vm=>{
  > 			//通过vm访问组件实例
  >         })
  >     },
  > 	beforeRouterUpdate(to,from,next){},
  > 	beforeRouterLeave(to,from,next){}
  > }
  > ```

- 路由中  meta 字段  可以是对象 数组  设置布尔值等来进行相关判断

  ```
  {
  	path:'/user',
  	name: user,
  	component:user,
  	meta:{
  		title:'用户信息'
  	}
  }
  ```

  

  简单的来说就是路由元信息 可以使用`$route.meta` 来拿到这个值

- 过渡动效 `transtion`

  ```
  <transtion :name='transtionName'>
  	<router-view> </router-view>
  </transtion>
  
  watch:{
  	'$route' (to,from) {
  		const toDepth = to.path.split('/').length
  		const fromDepth = from.path.split('/').length
  		this.transtionName = toDepth < fromDepth ? 'slide-right':'slide-left'
  	}
  }
  ```

- 路由懒加载

  结合Vue 的异步组件 和 webpack 的代码分割功能  轻松实现路由组件的懒加载

  如果您使用的是 Babel，需要添加 [`syntax-dynamic-import`](https://babeljs.io/docs/plugins/syntax-dynamic-import/) 插件，才能使 Babel 可以正确地解析语法。

  ```js
  const Foo = () => import(/* webpackChunkName: "group-foo" */ './Foo.vue')
  ```

  Webpack 会将任何一个异步模块与相同的块名称组合到相同的异步块中。

- router-link

  tag 属性: 渲染为什么标签

  active-class 设置链接激活时使用的css类名

  exact : 精确匹配模式

  exact-active-class : 精确匹配的时候激活的class

