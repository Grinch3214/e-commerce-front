<template>
	<section class="container px-4 py-10">
		<div class="flex gap-5">
			<div class="h-[300px] max-w-[400px] w-full flex-shrink-0 flex justify-center">
				<img
					:src="product.image"
					:alt="product.title"
					class="h-full w-auto object-contain"
					as="image"
					height="300"
					rel="preload"
					width="500"
				>
			</div>
			<div>
				<h2 class="font-bold text-3xl mb-5">{{ product.title }}</h2>
				<p class="mb-3">{{ product.description }}</p>
				<div class="flex gap-7 items-center mb-8">
					<p>{{ product.rating ? product.rating.rate : 'N/A' }}</p>
					<p class="text-sm py-1 px-4 bg-sky-950 self-start text-white rounded-lg">{{ product.category }}</p>
				</div>
				<div class="flex items-center gap-2 mb-10">
					<button class="bg-gray-900 text-white w-10 h-7 rounded-lg">-</button>
					<div class="border min-w-[28px] flex justify-center items-center rounded-lg px-2">0</div>
					<button class="bg-gray-900 text-white w-10 h-7 rounded-lg">+</button>
				</div>
				<button class="rounded-lg px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors border-2 border-gray-900">Add to cart</button>
			</div>
		</div>
	</section>
</template>

<script setup>
	import { useRoute } from 'vue-router'
	import { onMounted, computed } from 'vue'
	import { useProductsStore } from '../store/index'

	const route = useRoute()

	const products = useProductsStore()
	onMounted(() => products.fetchProductId(route.params.id))

	const product = computed(() => products.productItem)
	// setTimeout(() => {
	// 	console.log(product.value)
	// }, 1000)

</script>