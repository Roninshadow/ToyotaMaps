import mixitup from 'mixitup'

document.addEventListener('DOMContentLoaded', () => {
	const container = document.querySelector('.catalogPage__cards')

	if (!container) return // если нет карточек — выходим

	const mixer = mixitup(container)

	const checkboxes = document.querySelectorAll('.catalog__filters-input')

	function updateFilter() {
		let activeFilters = []

		checkboxes.forEach(checkbox => {
			if (checkbox.checked) {
				// используем value, но нужно убедиться, что у чекбокса оно есть
				activeFilters.push(checkbox.value)
			}
		})

		const filterString = activeFilters.length ? activeFilters.join(',') : 'all'
		mixer.filter(filterString)
	}

	checkboxes.forEach(cb => cb.addEventListener('change', updateFilter))
})
