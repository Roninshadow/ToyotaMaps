document.addEventListener('DOMContentLoaded', () => {
	const basketContent = document.querySelector('.basket__content')
	const basketEmptyContent = document.querySelector('.basketEmpty__content')
	const basketList = document.querySelector('#basket_js')

	if (!basketContent || !basketEmptyContent || !basketList) return

	function updateVisibility() {
		const hasItems = basketList.children.length > 0
		if (hasItems) {
			basketContent.style.display = 'block'
			basketEmptyContent.style.display = 'none'
		} else {
			basketContent.style.display = 'none'
			basketEmptyContent.style.display = 'block'
		}
	}

	updateVisibility() // Проверяем сразу при загрузке

	// Создаем наблюдатель за изменениями в списке корзины
	const observer = new MutationObserver(() => {
		updateVisibility()
	})

	// Настраиваем наблюдатель — следим за изменениями детей списка
	observer.observe(basketList, { childList: true })
})
