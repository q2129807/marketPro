import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//assets放静态资源
import './assets/styles/public.css'//引入在饿了么样式之后这样同样的层级后引入覆盖先引入的
//引入axios和qs
import axios from 'axios'
import qs from 'qs' //装了axios会自带
//把方法挂在原型上
Vue.prototype.axios=axios;
Vue.prototype.qs=qs
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
