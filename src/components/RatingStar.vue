<template>
	<div class="star-rating">
		<span v-for="item in props.starLimit" :key="item" class="star star-nofill"></span>
		<div class="star-rating-fullfield" :style="ratingWidthStyle">
			<span v-for="item in props.starLimit" :key="item" class="star star-fill"></span>
		</div>
	</div>
</template>

<script setup>
	import { computed } from 'vue'
	const props = defineProps({
		rating: {
			type: [Number, String],
			default: 0
		},
		starLimit: {
			type: Number,
			default: 5
		}
	})

	const ratingWidth = computed(() => {
		return `${+props.rating / props.starLimit * 100}`
	})

	const ratingWidthStyle = computed(() => {
		return `width: ${ratingWidth.value}%;`
	})
</script>

<style scoped>
	.star-rating {
		@apply relative inline-flex;
	}
	.star-rating-fullfield {
		@apply absolute w-0 h-full top-0 left-0 overflow-hidden inline-flex;
	}
	.star {
		@apply inline-block w-5 h-5 mx-[1px] flex-shrink-0;
	}
	.star-fill {
		background: url('../assets/images/icon-star-fill.svg') no-repeat center;
	}
	.star-nofill {
		background: url('../assets/images/icon-star-no-fill.svg') no-repeat center;
	}
</style>