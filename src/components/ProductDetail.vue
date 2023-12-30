<template>
	<div class="container px-4 py-5">
		<div>
			<img src="" alt="product" width="500" height="300">
		</div>
		<h2>Title</h2>
		<p>Desc</p>
		<div>
			<p>rating.rate</p>
			<p>category</p>
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

	const route = useRoute()
	console.log(route.params.id)

</script>