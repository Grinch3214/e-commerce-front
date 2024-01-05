import { defineStore } from 'pinia'
import { useProductsStore } from './products'

export const useShopStore = defineStore('shop', () => {
	const productStore = useProductsStore()

	return {
		productStore
	}
})