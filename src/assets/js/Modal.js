const call = document.querySelectorAll('.call')
const popUpConnect = document.getElementById('Connect')
const popUpConnectEnd = document.getElementById('ConnectEnd')
const popUpConnectEndBtn = document.getElementById('ConnectEndBtn')

const ask = document.querySelectorAll('.ask')
const popUpQuestion = document.getElementById('Question')
const popUpQuestionEnd = document.getElementById('QuestionEnd')
const popUpQuestionEndBtn = document.getElementById('QuestionEndBtn')

const burgerBtn = document.getElementById('burgerBtn')
const popUpBurger = document.getElementById('burger')

const popUpClose = document.querySelectorAll('.close')

function openConnectModal() {
	if (popUpConnect) {
		popUpConnect.showModal()
		document.body.classList.add('scroll-block')
	}
}

function openConnectEndModal() {
	closeModal()
	if (popUpConnectEnd) {
		popUpConnectEnd.showModal()
		document.body.classList.add('scroll-block')
	}
}

function openQuestion() {
	if (popUpQuestion) {
		popUpQuestion.showModal()
		document.body.classList.add('scroll-block')
	}
}

function openQuestionEnd() {
	closeModal()
	if (popUpQuestionEnd) {
		popUpQuestionEnd.showModal()
		document.body.classList.add('scroll-block')
	}
}

function closeModal() {
	popUpConnect?.close()
	popUpConnectEnd?.close()
	popUpQuestion?.close()
	popUpQuestionEnd?.close()
	popUpBurger?.close()
	returnScroll()
}

function returnScroll() {
	document.body.classList.remove('scroll-block')
}

if (call.length && popUpConnect) {
	call.forEach(el => {
		el.addEventListener('click', openConnectModal)
	})
}

if (ask.length && popUpQuestion) {
	ask.forEach(el => {
		el.addEventListener('click', openQuestion)
	})
}

if (popUpClose.length) {
	popUpClose.forEach(el => {
		el.addEventListener('click', closeModal)
	})
}

if (burgerBtn && popUpBurger) {
	burgerBtn.addEventListener('click', () => {
		popUpBurger.showModal()
	})
}

if (popUpConnectEndBtn) {
	popUpConnectEndBtn.addEventListener('click', openConnectEndModal)
}

if (popUpQuestionEndBtn) {
	popUpQuestionEndBtn.addEventListener('click', openQuestionEnd)
}
