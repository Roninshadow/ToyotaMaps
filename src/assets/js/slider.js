document.addEventListener('DOMContentLoaded', () => {
	const slider = document.querySelector('.catalog__slider')
	const btnLeft = document.querySelector('.catalog__slider-left')
	const btnRight = document.querySelector('.catalog__slider-right')

	if (slider && btnLeft && btnRight) {
		btnLeft.addEventListener('click', () => {
			slider.scrollBy({ left: -315, behavior: 'smooth' })
		})

		btnRight.addEventListener('click', () => {
			slider.scrollBy({ left: 315, behavior: 'smooth' })
		})
	}

	const sliderTestimonial = document.querySelector('.testimonial__cards')
	const btnLeftTestimonial = document.querySelector('.testimonial__slider-left')
	const btnRightTestimonial = document.querySelector('.testimonial__slider-right')

	if (sliderTestimonial && btnLeftTestimonial && btnRightTestimonial) {
		btnLeftTestimonial.addEventListener('click', () => {
			sliderTestimonial.scrollBy({ left: -315, behavior: 'smooth' })
		})

		btnRightTestimonial.addEventListener('click', () => {
			sliderTestimonial.scrollBy({ left: 315, behavior: 'smooth' })
		})
	}
})
