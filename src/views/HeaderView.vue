<template>
	<header class="bg-gray-900 text-white py-6">
		<div class="flex justify-between items-center container">
			<a class="text-xl font-bold" href="#">E-Shop</a>
			<div class="flex gap-4 items-center">
				<input class="rounded-md px-3 py-2 shadow-md text-black max-w-[240px] w-full" type="text" placeholder="Search product">
				<router-link to="/cart" class="relative" href="#">
					<IconCart width="50px" height="50px" color="white" />
					<span class="absolute top-0 right-0 rounded-full bg-red-600 w-5 h-5 flex justify-center items-center text-xs">2</span>
				</router-link>
			</div>
		</div>
	</header>
</template>

<script setup>
	import IconCart from '../components/icons/IconCart.vue'
</script>