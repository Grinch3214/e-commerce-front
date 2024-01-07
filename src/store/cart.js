import { defineStore } from 'pinia'
import { ref } from 'vue'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

export const useCartStore = defineStore('cartStore', () => {

	const cart = ref([])
	const addCart = (id, price, quantity = 1) => {
		const data = {
			id,
			price,
			quantity
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

	return {
		addCart,
		loadFromLocalStorage
	}
})