<template>
	<article class="w-full max-w-sm md:max-w-none flex flex-col border border-gray-800 rounded-lg p-6 gap-2 group">
			<div class="h-40 mx-auto mb-3 overflow-hidden">
				<img class="group-hover:scale-105 w-auto h-full object-cover transition-all" :src="product.image" alt="" width="200" height="200">
			</div>
			<h3 class="text-xl font-bold mb-auto">{{ product.title }}</h3>
			<p class="text-xs py-1 px-4 bg-sky-950 self-start text-white rounded-lg">{{ product.category }}</p>
			<div class="flex justify-between items-center font-bold">
				<p class="text-sm">Price:</p>
				<p class="">${{ product.price }}</p>
			</div>
			<div class="flex flex-col lg:flex-row gap-4 text-center">
				<router-link :to="`/product/${product.id}`" class="rounded-lg px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors w-full lg:w-3/6 border-2 border-gray-900">View product</router-link>
				<button class="rounded-lg px-4 py-2 text-gray-900 border-2 transition-colors border-gray-900 hover:bg-slate-100 w-full lg:w-3/6">Add to Cart</button>
			</div>
		</article>
</template>

<script setup>
	const props = defineProps({
		product: {
			type: Object,
			require: true
		}
	})
</script>