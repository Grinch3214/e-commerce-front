<template>
	<section class="container px-4 py-10">
		<h2>Cart</h2>

		<ul class="cart">
			<li class="flex items-start gap-6 py-4 border-b-2 border-gray-500">
				<div class="flex items-center gap-4 w-full">
					<div class="h-[150px] w-[200px] flex-shrink-0 p-2 border-2 border-gray-500">
						<img class="h-full w-full object-contain" src="" alt="" width="150" height="200">
					</div>
					<h3 class="font-bold max-w-xs w-full">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta.</h3>
				</div>
				<div class="flex w-full gap-4 items-center justify-end">
					<div class="max-w-[150px] w-full">$145.99</div>
					<div class="flex gap-2 max-w-[170px] w-full">
						<button class="bg-gray-900 text-white w-10 h-7 rounded-lg">-</button>
						<div class="border min-w-[28px] flex items-center h-7 rounded-lg px-2">0</div>
						<button class="bg-gray-900 text-white w-10 h-7 rounded-lg">+</button>
					</div>
					<div class="max-w-[200px] w-full">$14552.99</div>
					<div>
						<button class="px-4 py-2 bg-red-500 rounded-md text-white hover:bg-red-600">Delete</button>
					</div>
				</div>
			</li>
		</ul>
	</section>
</template>

<style lang="scss" scoped>
	.cart {
		li:first-child {
			@apply border-t-2;
		}
	}
</style>