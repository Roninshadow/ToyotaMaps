window.addEventListener('click', event => {
	const actionElement = event.target.closest('[data-action]')
	if (!actionElement) return // если не нашли, выходим

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
			counter.innerText = Math.max(current - 1, 0)
		}
	}
})
