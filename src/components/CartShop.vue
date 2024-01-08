<template>
	<section class="container px-4 py-10">
		<h2 class="font-bold text-sm">Your Cart (products)</h2>

		<ul class="cart">
			<li v-for="(item, index) in carts" :key="index" class="lg:flex items-start gap-6 py-4 border-b-2 border-gray-500">
				<div class="sm:flex items-center gap-4 w-full mb-4 sm:mb-0">
					<div class="h-[150px] w-[200px] flex-shrink-0 p-2 border-2 border-gray-500 mb-3 sm:mb-0">
						<img class="h-full w-full object-contain" :src="item.productId.image" :alt="item.productId.title" width="150" height="200">
					</div>
					<h3 class="font-bold lg:max-w-xs w-full">{{ item.productId.title }}</h3>
				</div>
				<div class="flex flex-col sm:flex-row w-full gap-4 sm:items-center justify-end">
					<div class="max-w-[150px] w-full font-bold">${{ item.productId.price }}</div>
					<div class="flex gap-2 max-w-[170px] w-full">
						<button class="bg-gray-900 text-white w-10 h-7 rounded-lg">-</button>
						<div class="border min-w-[28px] flex justify-center items-center h-7 rounded-lg px-2">1</div>
						<button class="bg-gray-900 text-white w-10 h-7 rounded-lg">+</button>
					</div>
					<div class="max-w-[200px] w-full font-bold text-sm">$14552.99</div>
					<div>
						<button class="px-4 py-2 w-full sm:w-auto bg-red-500 rounded-md text-white hover:bg-red-600">Delete</button>
					</div>
				</div>
			</li>
		</ul>
	</section>
</template>

<script setup>
	import { computed } from 'vue' 
	import { useCartStore } from '../store/cart'
	const cartStore = useCartStore()

	const carts = computed(() => cartStore.cartPrewiews())
</script>

<style lang="scss" scoped>
	.cart {
		li:first-child {
			@apply border-t-2;
		}
	}
</style>