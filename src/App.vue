<script setup>
	import HeaderComponent from './views/HeaderView.vue'
	import FooterComponent from './views/FooterView.vue'
	import { onMounted } from 'vue'
	import { useShopStore } from './store/index'

	const products = useShopStore()
	onMounted(() => products.productStore.fetchProducts())
</script>

<template>
	<HeaderComponent />
	<main class="flex-1">
		<router-view />
	</main>
	<FooterComponent />
</template>
