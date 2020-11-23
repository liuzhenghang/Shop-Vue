import Vue from 'vue'
// 1:导入路由模块
import VueRouter from 'vue-router'
import Register from './pages/Register.vue'
import Home from './pages/Home.vue'
import Goods from './pages/Goods.vue'
import Cart from './pages/Cart.vue'
import Mine from './pages/Mine.vue'
import Login from'./pages/Login.vue'


// 2将模块赋给vue实例.,注册到全局，整个项目都可以使用路由
Vue.use(VueRouter);
//3 定义路由规则
const routes = [{
		path: '/',
		component: Home
	},
	{
		path: '/goods',
		component: Goods
	},
	{
		path: '/cart',
		component: Cart
	},
	{
		path: '/mine',
		component: Mine
	},
	{
		path:'/login',
		component: Login
	},
	{
		path:'/register',
		component: Register
	}
]
// 4创建路由实例     mode:'history'  去掉#
const router = new VueRouter({
	routes,
	mode: 'history'
});

// 导出 路由模块
export default router;
