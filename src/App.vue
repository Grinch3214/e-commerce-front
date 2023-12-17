<script setup>
	import HeaderComponent from './views/HeaderView.vue'
	import FooterComponent from './views/FooterView.vue'
</script>

<template>
	<HeaderComponent />
	<main class="flex-1">
		<router-view />
	</main>
	<FooterComponent />
</template>
