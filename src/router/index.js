import { createRouter, createWebHashHistory } from 'vue-router'
import ProductsView from '../views/ProductsView.vue'
import ProductDetail from '../components/ProductDetail.vue'
import CartShop from '../components/CartShop.vue'

const routes = [
	{
		path: '/',
		name: 'ProductsView',
		component: ProductsView
	},
	{
		path: '/product/:id',
		name: 'ProductDetail',
		component: ProductDetail
	},
	{
		path: '/cart',
		name: 'CartShop',
		component: CartShop
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router