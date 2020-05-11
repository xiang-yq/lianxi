##### vuex

- 一个专门为Vue.js应用程序开发的状态管理模式  (状态管理库) (管理共享状态)
- 采用集中式存储管理应用的所有组件的状态

- vuex的状态存储是响应式的 当Vue组件从store中读取状态的时候,若store中的状态发生变化  那么相应的组件也会相应地得到高效更新
- 你不能直接改变store中的状态 改变store中的状态的唯一途径就是显示地提交mutation

- 最简单的store

  ```
  import Vuex from 'vuex'
  const store = new Vuex.Store({
  	state:{
  		count:0
  	},
  	mutations:{
  		increment(state){
  		 state.count++
  		}
  	}
  })
  ```

  - 通过`store.state` 来获取状态对象 以及通过`store.commit`方法出发状态变更
  - `this.$store.commit('increment')`      ` this.$store.state.count`
  - 强调  我们通过提交 mutation的方式 而非直接改变store.state.count

  - store中的状态是响应式的 在组件中调用store中的状态需要在计算属性中返回即可 触发变化也仅仅是在组件的methods中提交 mutation

- state   单一状态树

- mapState 辅助函数

  - ```
    import { mapState } from 'vuex'
    ```

- 对象展开运算符

  - ```
    computed:{
    localComputed(){},
    ...mapState({
    	///....
    })
    }
    ```

- Getter  可以认为是store的计算属性

- Mutation   store 的methods 同步方法

- Action   store的异步方法

- Module  模块化store

  ```
  const moduleA = {
  	state :()=>({...}),
  	mutations:{...},
  	actions:{...},
  	getters:{...}
  }
  const moduleA ={ ... }
  ...
  const store = new Vuex.Store({
  	modules:{
  		a:moduleA,
  		b:moduleB,
  	}
  })
  ```

- 严格模式   

  - ```
    const store = new Vuex.Store({
    	//...
    	strict: true
    	strict: process.env.NODE_ENV !=='production'
    })
    ```

  - 严格模式下 无论何时发生了状态变更 且不是有mutation函数引起的  将会抛出错误

  - 严格模式需要在发布环境下关闭  

