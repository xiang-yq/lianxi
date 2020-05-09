import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// element
import { Button, Select, Input, Form, FormItem, Image, Col,Alert} from 'element-ui';
Vue.use(Button).use(Select).use(Form).use(FormItem).use(Image).use(Input).use(Col).use(Alert)
 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
