import { createRouter, createWebHashHistory } from 'vue-router'
import ProductCard from '../components/ProductCard.vue'
import ProductsView from '../views/ProductsView.vue'

const routes = [
	{
		path: '/',
		name: 'ProductsView',
		component: ProductsView
	},
	{
		path: '/product',
		name: 'productCard',
		component: ProductCard
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router