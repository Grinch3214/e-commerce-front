<template>
	<div class="container px-4 py-5">
		<div>
			<img :src="product.image" alt="product" width="500" height="300">
		</div>
		<h2>{{ product.title }}</h2>
		<p>{{ product.description }}</p>
		<div>
			<p>{{ product.rating ? product.rating.rate : 'N/A' }}</p>
			<p>{{ product.category }}</p>
		</div>
		<div>
			<button>-</button>
			<div>0</div>
			<button>+</button>
		</div>
		<button>Add to cart</button>
	</div>
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