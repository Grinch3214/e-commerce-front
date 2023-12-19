<template>
	<article>
			<div class="h-40">
				<img class="w-auto h-full object-cover" :src="product.image" alt="" width="200" height="200">
			</div>
			<h3>{{ product.title }}</h3>
			<p>{{ product.category }}</p>
			<p>{{ product.price }}</p>
			<div class="flex gap-5">
				<button class="px-7 py-4 bg-gray-900 text-white hover:bg-gray-800 transition-colors">View product</button>
				<button class="px-7 py-4 text-gray-900 border-2 transition-colors border-gray-900 hover:bg-slate-100">Add to Cart</button>
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