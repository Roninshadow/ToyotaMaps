document.querySelectorAll('.dropdown').forEach(dropdown => {
	const selected = dropdown.querySelector('.dropdown__selected')
	const list = dropdown.querySelector('.dropdown__list')

	selected.addEventListener('click', () => {
		list.classList.toggle('hidden')
	})

	list.querySelectorAll('.dropdown__item').forEach(item => {
		item.addEventListener('click', () => {
			selected.textContent = item.textContent
			selected.classList.add('active-item') // <- вот это добавляем
			list.classList.add('hidden')
		})
	})

	document.addEventListener('click', e => {
		if (!dropdown.contains(e.target)) {
			list.classList.add('hidden')
		}
	})
})
