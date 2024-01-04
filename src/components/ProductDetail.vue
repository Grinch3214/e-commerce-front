<template>
	<section
		v-if="!products.loadingPage"
		class="flex justify-center items-center min-height-calc lg:text-4xl font-bold"
	>
		Loading...
	</section>
	<section
		v-else
		class="container px-4 py-10"
	>
		<div class="lg:flex gap-5">
			<div class="h-[300px] max-w-[400px] w-full flex-shrink-0 flex justify-center mx-auto mb-5 lg:m-0">
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
				<h2 class="font-bold text-3xl mb-5 text-center lg:text-left">{{ product.title }}</h2>
				<p class="mb-3 text-justify">{{ product.description }}</p>
				<div class="flex gap-7 items-center mb-2">
					<RatingStar :rating="ratingStar" />
					<p class="text-xs py-1 px-4 bg-sky-950 self-start text-white rounded-lg">{{ product.category }}</p>
				</div>
				<p class="font-bold mb-10">${{ product.price }}</p>
				<div class="sm:flex justify-between items-center">
					<div class="flex items-center gap-2 mb-5 sm:mb-0">
						<button class="bg-gray-900 text-white w-10 h-7 rounded-lg">-</button>
						<div class="border min-w-[28px] flex justify-center items-center rounded-lg px-2">0</div>
						<button class="bg-gray-900 text-white w-10 h-7 rounded-lg">+</button>
					</div>
					<button class="rounded-lg px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors border-2 border-gray-900 w-full sm:w-auto">Add to cart</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
	import RatingStar from './RatingStar.vue'
	import { useRoute } from 'vue-router'
	import { onMounted, computed } from 'vue'
	import { useProductsStore } from '../store/index'

	const route = useRoute()

	const products = useProductsStore()
	onMounted(() => products.fetchProductId(route.params.id))

	const product = computed(() => products.productItem)

	const ratingStar = computed(() => {
		return product.value.rating ? product.value.rating.rate : 'N/A'
	})

</script>

<style scoped>
.min-height-calc {
	height: calc(100vh - 91px);
}
</style>