<template>
	<div v-if="!products.productStore.loadProducts" class="grid grid-cols-1 justify-items-center md:justify-items-stretch md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 container gap-4 py-10">
		<ProductCardSkeleton v-for="(item, index) in 8" :key="index" />
	</div>
	<div v-else class="grid grid-cols-1 justify-items-center md:justify-items-stretch md:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 container gap-4 py-10">
		<ProductCard v-for="item in list" :key="item.id" :product="item" />
	</div>
</template>

<script setup>
	import { computed } from 'vue'
	import ProductCard from '../components/ProductCard.vue'
	import ProductCardSkeleton from '../components/ProductCardSkeleton.vue'
	import { useShopStore } from '../store/index'

	const products = useShopStore()
	const list = computed(() => products.productStore.listProduct)
</script>
