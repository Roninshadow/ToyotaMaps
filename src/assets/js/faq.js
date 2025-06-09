const faq = document.querySelectorAll('.faq__item')

faq.forEach(faq_item => {
	faq_item.addEventListener('click', () => {
		faq.forEach(el => {
			if (el != faq_item) {
				el.classList.remove('active')
			}
		})
		faq_item.classList.toggle('active')
	})
})
