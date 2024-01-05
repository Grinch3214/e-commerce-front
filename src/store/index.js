import { defineStore } from 'pinia'
import { useProductsStore } from './products'
import { useCartStore } from './cart'

export const useShopStore = defineStore('shop', () => {
	const productStore = useProductsStore()
	const cartStore = useCartStore()

	return {
		productStore,
		cartStore
	}
})