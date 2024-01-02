<template>
	<div class="w-full max-w-sm md:max-w-none flex flex-col border border-gray-300 rounded-lg p-6 gap-3 group min-h-[408px]">
			<AnimatedPlaceholder height="160px" width="100%" borderRadius="8px" />
			<AnimatedPlaceholder height="56px" width="100%" borderRadius="8px" />
			<AnimatedPlaceholder height="24px" width="130px" borderRadius="8px" />
			<div class="flex justify-between items-center font-bold">
				<AnimatedPlaceholder height="25px" width="50px" borderRadius="8px" />
				<AnimatedPlaceholder height="25px" width="70px" borderRadius="8px" />
			</div>
			<div class="flex flex-col lg:flex-row gap-4 text-center">
				<AnimatedPlaceholder height="47px" width="50%" borderRadius="8px" />
				<AnimatedPlaceholder height="47px" width="50%" borderRadius="8px" />
			</div>
		</div>
</template>

<script setup>
	import AnimatedPlaceholder from './AnimatedPlaceholder.vue'
</script>