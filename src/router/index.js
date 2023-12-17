import { createRouter, createWebHashHistory } from 'vue-router'
import ProductsView from '../views/ProductsView.vue'

const routes = [
	{
		path: '/',
		name: 'ProductsView',
		component: ProductsView
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router