<script setup>
	import HeaderComponent from './views/HeaderView.vue'
	import FooterComponent from './views/FooterView.vue'
	import { onMounted } from 'vue'
	import { useProductsStore } from './store/products'
	import { useCartStore } from './store/cart'

	const products = useProductsStore()
	const cartStore = useCartStore()
	onMounted(() => {
		products.fetchProducts()
		cartStore.loadFromLocalStorage()
	})
</script>

<template>
	<HeaderComponent />
	<main class="flex-1">
		<router-view />
	</main>
	<FooterComponent />
</template>
