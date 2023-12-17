<script setup>
	import HeaderComponent from './views/HeaderView.vue'
	import FooterComponent from './views/FooterView.vue'
</script>

<template>
	<HeaderComponent />
	<main>
		<router-view />
	</main>
	<FooterComponent />
</template>
