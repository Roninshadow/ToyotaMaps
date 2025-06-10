function getCart() {
	return JSON.parse(localStorage.getItem('cart')) || {}
}

function saveCart(cart) {
	localStorage.setItem('cart', JSON.stringify(cart))
}

function setupAddToCart() {
	document.querySelectorAll('[data-card]').forEach(button => {
		button.addEventListener('click', e => {
			e.preventDefault()

			const card = button.closest('.catalogPage__card')
			if (!card) return

			// Получаем данные товара из карточки
			const id = card.dataset.id || card.querySelector('.catalogPage__card-title')?.innerText.trim()
			const title = card.querySelector('.catalogPage__card-title')?.innerText.trim()
			const priceText = card.querySelector('.catalogPage__card-price')?.innerText || '0'
			const price = parseInt(priceText.replace(/\D/g, '')) || 0
			const img = card.querySelector('img.catalogPage__card-image')?.src || ''

			if (!id) {
				console.warn('Товар без ID не добавлен')
				return
			}

			let cart = getCart()

			if (cart[id]) {
				cart[id].quantity += 1
			} else {
				cart[id] = {
					id,
					title,
					price,
					img,
					quantity: 1,
				}
			}

			saveCart(cart)

			// Перенаправление в корзину или вывод уведомления
			window.location.href = 'basket.html'
		})
	})
}

document.addEventListener('DOMContentLoaded', () => {
	if (document.querySelector('[data-card]')) {
		setupAddToCart()
	}
})
function getCart() {
	return JSON.parse(localStorage.getItem('cart')) || {}
}

function saveCart(cart) {
	localStorage.setItem('cart', JSON.stringify(cart))
}

function updateCartSummary() {
	const items = document.querySelectorAll('.basket__item')
	let totalQuantity = 0
	let totalPrice = 0

	items.forEach(item => {
		const quantity = parseInt(item.querySelector('.quantity')?.innerText || 0)
		const price = parseInt(item.querySelector('.basket__item-price')?.innerText.replace(/\D/g, '') || 0)

		totalQuantity += quantity
		totalPrice += quantity * price
	})

	const quantityEl = document.querySelector('.basket__order-quantity')
	const totalEl = document.querySelector('.basket__total-price')

	if (quantityEl)
		quantityEl.innerText = `${totalQuantity} товар${totalQuantity === 1 ? '' : totalQuantity < 5 ? 'а' : 'ов'}`
	if (totalEl) totalEl.innerText = `${totalPrice.toLocaleString()} руб`
}

function updateVisibilityBasket() {
	const basketContent = document.querySelector('.basket__content')
	const basketEmptyContent = document.querySelector('.basketEmpty__content')
	const basketList = document.querySelector('#basket_js')

	if (!basketContent || !basketEmptyContent || !basketList) return

	const hasItems = basketList.children.length > 0
	if (hasItems) {
		basketContent.style.display = 'block'
		basketEmptyContent.style.display = 'none'
	} else {
		basketContent.style.display = 'none'
		basketEmptyContent.style.display = 'block'
	}
}

function renderBasket() {
	const basketList = document.querySelector('#basket_js')
	if (!basketList) return

	const cart = getCart()
	basketList.innerHTML = ''

	for (const id in cart) {
		const item = cart[id]

		const li = document.createElement('li')
		li.classList.add('basket__item')
		li.innerHTML = `
			<div class="basket-adaptives">
				<img src="${item.img}" alt="${item.title}" class="basket__item-image" />
				<p class="basket__item-title">${item.title}</p>
			</div>
			<div class="basket-adaptives2">
				<p class="basket__item-price">${item.price.toLocaleString('ru-RU')} руб</p>
				<div class="basket__item-counter counter">
					<button class="basket__item-minus" data-action="minus" data-id="${id}"><img src="assets/images/Vector3.svg" alt="" /></button>
					<p class="basket__item-number quantity">${item.quantity}</p>
					<button class="basket__item-plus" data-action="plus" data-id="${id}"><img src="assets/images/Vector3-1.svg" alt="" /></button>
				</div>
				<p class="basket__item-delete" data-action="delete" data-id="${id}">Удалить</p>
			</div>
		`

		basketList.appendChild(li)
	}

	updateCartSummary()
	updateVisibilityBasket()
}

document.addEventListener('DOMContentLoaded', () => {
	if (document.querySelector('#basket_js')) {
		renderBasket()
	}
})

window.addEventListener('click', event => {
	const actionElement = event.target.closest('[data-action]')
	if (!actionElement) return

	const action = actionElement.dataset.action
	const id = actionElement.dataset.id
	if (!id) return

	let cart = getCart()
	if (!cart[id]) return

	if (action === 'plus') {
		cart[id].quantity += 1
	} else if (action === 'minus') {
		if (cart[id].quantity > 1) {
			cart[id].quantity -= 1
		} else {
			delete cart[id]
		}
	} else if (action === 'delete') {
		delete cart[id]
	}

	saveCart(cart)
	renderBasket()
})
