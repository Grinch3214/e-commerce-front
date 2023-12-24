<template>
	<div v-if="!products.loadProducts">
		Download product information
	</div>
	<div v-else class="grid grid-cols-3 container gap-4 py-10">
		<ProductCard v-for="item in list" :key="item.id" :product="item" />
	</div>
</template>

<script setup>
	import { computed } from 'vue'
	import ProductCard from '../components/ProductCard.vue'
	import { useProductsStore } from '../store/index'

	const products = useProductsStore()
	const list = computed(() => products.listProduct)
</script>
