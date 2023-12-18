<script setup>
	import HeaderComponent from './views/HeaderView.vue'
	import FooterComponent from './views/FooterView.vue'
	import { onMounted } from 'vue'
	import { useProductsStore } from './store/index'

	const products = useProductsStore()
	onMounted(() => products.fetchProducts())
</script>

<template>
	<HeaderComponent />
	<main class="flex-1">
		<router-view />
	</main>
	<FooterComponent />
</template>
