<template>
	<article>
			<div class="h-40">
				<img class="w-auto h-full object-cover" :src="product.image" alt="" width="200" height="200">
			</div>
			<h3>{{ product.title }}</h3>
			<p>{{ product.category }}</p>
			<p>{{ product.price }}</p>
			<div>
				<button>View product</button>
				<button>Add to Cart</button>
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