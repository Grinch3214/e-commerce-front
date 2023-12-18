<template>
	<div v-if="!products.loadProducts">
		Download product information
	</div>
	<div v-else>
		<ProductCardVue v-for="item in list" :key="item.id" :product="item" />
	</div>
</template>

<script setup>
	import { computed } from 'vue'
	import ProductCardVue from '../components/ProductCard.vue'
	import { useProductsStore } from '../store/index'

	const products = useProductsStore()
	const list = computed(() => products.listProduct)
</script>
