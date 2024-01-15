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
		if(searchInput.value.length < 3) {
			return products.value
		}
		return products.value.filter((prd) => {
			if(prd.title.toLowerCase().includes(searchInput.value.toLowerCase()) === false) {
				return false
			} else {
				return prd.title.toLowerCase().includes(searchInput.value.toLowerCase())
			}
		})
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