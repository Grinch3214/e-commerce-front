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
	}

	const addCartDetail = (product, quantity) => {
		const data = { 
			...product,
			quantity
		}
		const findId = cart.value.find(e => e.id === data.id)
		console.log('findId: ',findId)
		if(findId) {
			const findIndexProduct = cart.value.findIndex(e => e.id === data.id)
			cart.value[findIndexProduct].quantity = cart.value[findIndexProduct].quantity + quantity
			saveToLocalStorage()
			alertAddCart()
		} else {
			console.log('ELSE ')
			cart.value.push(data)
			saveToLocalStorage()
			alertAddCart()
		}
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
	const cartPreviews = computed(() => {
		const productStore = useProductsStore()
		const previews = cart.value.map((prd, index) => {
			const foundProduct = productStore.products.find((e) => e.id === prd.id)
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

	const total = computed(() => {
		return cart.value.reduce((sum, prd) => {
			return sum + prd.price * prd.quantity
		}, 0)
	})

	const alertAddCart = () => {
		Swal.fire({
			position: "center",
			icon: "success",
			title: "Your product has been successfully added to cart",
			showConfirmButton: false,
			timer: 900
		})
	}
	const alertAddCartError = () => {
		Swal.fire({
			position: "center",
			icon: "error",
			title: "This item is already in the cart",
			showConfirmButton: false,
			timer: 900
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
		cartPreviews,
		incrementQuantity,
		decrementQuantity,
		removeCartItem,
		clearCart,
		addCartDetail,
		total
	}
})