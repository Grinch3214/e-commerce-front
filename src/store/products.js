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

	const loadingPage = ref(false)

	const searchInput = ref('')

	const fetchProducts = async() => {
		await axios.get(`${BASE_API}`)
			.then((response) => {
				products.value = response.data
			}).catch(err => console.log(err))
	}

	const fetchProductId = async(id) => {
		await axios.get(`${BASE_API}/${id}`)
			.then((response) => {
				productId.value = response.data
				loadingPage.value = true
			}).catch(err => console.log(err))
	}

	const searchProduct = computed(() => {
		const searchTerm = searchInput.value.toLowerCase()
	
		if (searchTerm.length < 3) {
			return products.value
		}
	
		return products.value.filter(prd => prd.title.toLowerCase().includes(searchTerm))
	})

	return {
		fetchProducts,
		listProduct,
		loadProducts,
		fetchProductId,
		productItem,
		loadingPage,
		products,
		searchInput,
		searchProduct
	}
})