window.addEventListener('click', event => {
	const actionElement = event.target.closest('[data-action]')
	if (!actionElement) return

	const action = actionElement.dataset.action

	if (action === 'plus' || action === 'minus') {
		const counterWrapper = actionElement.closest('.counter')
		if (!counterWrapper) return

		const counter = counterWrapper.querySelector('.quantity')
		if (!counter) return

		let current = Number(counter.innerText)

		if (action === 'plus') {
			counter.innerText = current + 1
		}

		if (action === 'minus') {
			if (current > 1) {
				counter.innerText = current - 1
			} else {
				// Если стало 0 или 1 и нужно удалить
				const item = actionElement.closest('.basket__item')
				if (item) item.remove()
			}
		}
		updateCartSummary()
	}
})
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