import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useProductsStore } from './products'

export const useCartStore = defineStore('cartStore', () => {

	const cart = ref([])

	const addCart = (product) => {
		const data = { 
			...product,
			quantity: 1
		}
		const findId = cart.value.find(e => e.id === data.id)
		if(findId) {
			alertAddCartError()
		} else {
			cart.value.push(data)
			saveToLocalStorage()
			alertAddCart()
		}
		console.log(cart.value)
	}

	const saveToLocalStorage = () => {
		const serializedCart = JSON.stringify(cart.value)
    localStorage.setItem('cartStore', serializedCart)
	}
	const loadFromLocalStorage = () => {
		const storedCart = localStorage.getItem('cartStore')
    if (storedCart) {
      cart.value = JSON.parse(storedCart)
    }
	}
	const cartPrewiews = computed(() => {
		const productStore = useProductsStore()
		console.log('PREVIEW', cart.value)
		const previews = cart.value.map((prd, index) => {
			const foundProduct = productStore.products.find((e) => e.id === prd.id)
			console.log(foundProduct)
			if (foundProduct) {
					return {
							productId: foundProduct,
							quantity: cart.value[index].quantity,
							totalProduct: foundProduct.price * cart.value[index].quantity
					}
			}
			return null
		})
		return previews.filter((item) => item !== null)
	})

	const alertAddCart = () => {
		Swal.fire({
			position: "center",
			icon: "success",
			title: "Your work has been saved",
			showConfirmButton: false,
			timer: 600
		})
	}
	const alertAddCartError = () => {
		Swal.fire({
			position: "center",
			icon: "error",
			title: "Your work has been saved",
			showConfirmButton: false,
			timer: 600
		})
	}

	const incrementQuantity = (i) => {
		cart.value[i].quantity += 1
		saveToLocalStorage()
	}
	const decrementQuantity = (i) => {
		if(cart.value[i].quantity === 1) {
			cart.value[i].quantity = 1
			saveToLocalStorage()
			return
		}
		cart.value[i].quantity -= 1
		saveToLocalStorage()
	}

	const removeCartItem = (i) => {
		cart.value.splice(i, 1)
		saveToLocalStorage()
	}

	const clearCart = () => {
		cart.value = []
		saveToLocalStorage()
	}

	return {
		addCart,
		loadFromLocalStorage,
		cart,
		cartPrewiews,
		incrementQuantity,
		decrementQuantity,
		removeCartItem,
		clearCart
	}
})