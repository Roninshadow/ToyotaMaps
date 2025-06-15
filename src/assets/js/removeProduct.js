document.addEventListener('click', function (event) {
	const deleteBtn = event.target.closest('.basket__item-delete')

	if (deleteBtn) {
		const item = deleteBtn.closest('.basket__item')

		if (item) {
			item.remove()
			console.log('Товар удалён')

			// Если есть функция пересчёта суммы/количества
			if (typeof updateCartSummary === 'function') {
				updateCartSummary()
			}
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
	}
})
