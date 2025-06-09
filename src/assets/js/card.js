document.addEventListener('DOMContentLoaded', () => {

	const basket_inner = document.getElementById('basket_js')

  console.log('basket_inner:', basket_inner)

	window.addEventListener('click', function (event) {
		if (event.target.hasAttribute('data-card')) {
			const card = event.target.closest('.card')
			const cardInfo = {
				availability: card.querySelector('.availability') && card.querySelector('.availability').innerText,
				image: card.querySelector('.card-image') && card.querySelector('.card-image').getAttribute('src'),
				title: card.querySelector('.card-title') && card.querySelector('.card-title').innerText,
				price: card.querySelector('.card-price') && card.querySelector('.card-price').innerText,
			}
			console.log(cardInfo)
			const cardItem = `
    <li class="basket__item">
			<div class="basket-adaptives">
				<img src="assets/images/b3ec12fca32531f1d54ab75efebe1f3ce9583f84.png" alt="" class="basket__item-image" />
				<p class="basket__item-title">${cardInfo.title}</p>
			</div>
			<div class="basket-adaptives2">
				<p class="basket__item-price">${cardInfo.price}</p>
				<div class="basket__item-counter counter">
					<button class="basket__item-minus minus" data-action="minus">
					  <img src="assets/images/Vector3.svg" alt="" class="basket__item-icon" />
					</button>
					<p class="basket__item-number quantity">1</p>
					<button class="basket__item-plus plus" data-action="plus">
						<img src="assets/images/Vector3-1.svg" alt="" class="basket__item-icon" />
					</button>
				</div>
				<p class="basket__item-delete">Удалить</p>
			</div>
		</li>
    `
			basket_inner.insertAdjacentHTML('beforeend', cardItem)
		}
	})
})
