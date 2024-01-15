<template>
	<header class="bg-gray-900 text-white py-6">
		<div class="flex justify-between items-center container gap-3">
			<a class="text-sm sm:text-xl font-bold whitespace-nowrap" href="#">E-Shop</a>
			<div class="flex gap-4 items-center">
				<input v-model="productStore.searchInput" class="rounded-md px-3 py-2 shadow-md text-black max-w-[240px] w-full placeholder:text-sm sm:placeholder:text-base text-sm sm:text-base" type="text" placeholder="Search product">
				<router-link to="/cart" class="relative" href="#">
					<IconCart width="50px" height="50px" color="white" />
					<span class="absolute top-0 right-0 rounded-full bg-red-600 w-5 h-5 flex justify-center items-center text-xs">{{ cartStore.cart.length }}</span>
				</router-link>
			</div>
		</div>
	</header>
</template>

<script setup>
	import IconCart from '../components/icons/IconCart.vue'
	import { useCartStore } from '../store/cart'
	import { useProductsStore } from '../store/products'

	const cartStore = useCartStore()
	const productStore = useProductsStore()
</script>