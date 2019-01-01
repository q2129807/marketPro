import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'//创建新的路由需要在这里先引入路由页面的路径~！！！！！
import UserAdd from './views/UserAdd.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',//路径
      name: 'login',
      component: Login//views里面的vue文件
    },
    {
      path: '/useradd',//路径
      name: 'useradd',
      component: UserAdd//views里面的vue文件
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },  
    {//账号管理
      path: '/userlist',
      name: 'userlist',
    //  异步懒加载引入，就不需要取名字直接引入
      component: () => import(/* webpackChunkName: "about" */ './views/UserList.vue')
    },
    {
      path: '/pwdedit',
      name: 'pwdedit',
    //  异步懒加载引入，就不需要取名字直接引入
      component: () => import(/* webpackChunkName: "about" */ './views/PwdEdit.vue')
    },
    {//商品分类
      path: '/management',
      name: 'management',
    //  异步懒加载引入，就不需要取名字直接引入
      component: () => import(/* webpackChunkName: "about" */ './views/Management.vue')
    },
    {
      path: '/addmanage',
      name: 'addmanage',
    //  异步懒加载引入，就不需要取名字直接引入
      component: () => import(/* webpackChunkName: "about" */ './views/AddManage.vue')
    },
    //商品管理
    {
      path: '/goodsmanage',
      name: 'goodsmanage',
    //  异步懒加载引入，就不需要取名字直接引入
      component: () => import(/* webpackChunkName: "about" */ './views/goodsManage.vue')
    },
    {
      path: '/addgoods',
      name: 'addgoods',
    //  异步懒加载引入，就不需要取名字直接引入
      component: () => import(/* webpackChunkName: "about" */ './views/AddGoods.vue')
    },
    //库存管理
    {
      path: '/stockcontrol',
      name: 'stockcontrol',
    //  异步懒加载引入，就不需要取名字直接引入
      component: () => import(/* webpackChunkName: "about" */ './views/StockControl.vue')
    },
    {
      path: '/addstock',
      name: 'addstock',
    //  异步懒加载引入，就不需要取名字直接引入
      component: () => import(/* webpackChunkName: "about" */ './views/AddStock.vue')
    },
    //出货管理
    {
      path: '/salelist',
      name: 'salelist',
    //  异步懒加载引入，就不需要取名字直接引入
      component: () => import(/* webpackChunkName: "about" */ './views/SaleList.vue')
    },
    {
      path: '/goodsout',
      name: 'goodsout',
    //  异步懒加载引入，就不需要取名字直接引入
      component: () => import(/* webpackChunkName: "about" */ './views/GoodsOut.vue')
    },
    {
      path: '/salereturn',
      name: 'salereturn',
    //  异步懒加载引入，就不需要取名字直接引入
      component: () => import(/* webpackChunkName: "about" */ './views/SaleReturn.vue')
    },
    //统计管理
    {
      path: '/salestatistics',
      name: 'salestatistics',
    //  异步懒加载引入，就不需要取名字直接引入
      component: () => import(/* webpackChunkName: "about" */ './views/SaleStatistics.vue')
    },
    {
      path: '/stockstatistics',
      name: 'stockstatistics',
    //  异步懒加载引入，就不需要取名字直接引入
      component: () => import(/* webpackChunkName: "about" */ './views/StockStatistics.vue')
    },
    //会员管理
    {
      path: '/accountcontrol',
      name: 'accountcontrol',
    //  异步懒加载引入，就不需要取名字直接引入
      component: () => import(/* webpackChunkName: "about" */ './views/AccountControl.vue')
    },
    {
      path: '/addaccount',
      name: 'addaccount',
    //  异步懒加载引入，就不需要取名字直接引入
      component: () => import(/* webpackChunkName: "about" */ './views/AddAccount.vue')
    },
  ]
})
