import { defineStore } from 'pinia'
import axios from 'axios'
import { BASE_API } from '../constans'
import { ref, computed } from 'vue'

export const useProductsStore = defineStore('productsStore', () => {

	const products = ref([])
	const listProduct = computed(() => products.value)
	const loadProducts = computed(() => products.value.length > 0)
	const productId = ref({})
	const productItem = computed(() => productId.value)

	// const fetchProducts = async() => {
	// 	await axios.get(`${BASE_API}`)
	// 		.then((response) => {
	// 			products.value = response.data
	// 		}).catch(err => console.log(err))
	// }

	const fetchProducts = async() => {
		await setTimeout(() => {
			axios.get(`${BASE_API}`)
			.then((response) => {
				products.value = response.data
			}).catch(err => console.log(err))
		}, 5000)
	}

	const fetchProductId = async(id) => {
		await axios.get(`${BASE_API}/${id}`)
			.then((response) => {
				productId.value = response.data
			}).catch(err => console.log(err))
	}

	return {
		fetchProducts,
		listProduct,
		loadProducts,
		fetchProductId,
		productItem
	}
})