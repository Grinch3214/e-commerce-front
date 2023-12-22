import { createRouter, createWebHashHistory } from 'vue-router'
import ProductCard from '../components/ProductCard.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductItem from '../components/ProductItem.vue'

const routes = [
	{
		path: '/',
		name: 'ProductsView',
		component: ProductsView
	},
	{
		path: '/product/',
		name: 'ProductItem',
		component: ProductItem
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router