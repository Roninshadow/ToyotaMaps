const call  = document.querySelectorAll('.call')
const popUpConnect = document.getElementById('Connect')
const popUpConnectEnd = document.getElementById('ConnectEnd')
const popUpConnectEndBtn = document.getElementById('ConnectEndBtn')

const ask = document.querySelectorAll('.ask')
const popUpQuestion = document.getElementById('Question')
const popUpQuestionEnd = document.getElementById('QuestionEnd')
const popUpQuestionEndBtn = document.getElementById('QuestionEndBtn')

const popUpClose = document.querySelectorAll('.close')


function openConnectModal () {
  popUpConnect.showModal()
  document.body.classList.add('scroll-block')
}
function openConnectEndModal() {
	closeModal()
	popUpConnectEnd.showModal()
  document.body.classList.add('scroll-block')
}
function openQuestion () {
  popUpQuestion.showModal()
  document.body.classList.add('scroll-block')
}
function openQuestionEnd () {
	closeModal()
  popUpQuestionEnd.showModal()
  document.body.classList.add('scroll-block')
}
function closeModal () {
  popUpConnect.close()
  popUpConnectEnd.close()
  popUpQuestion.close()
  popUpQuestionEnd.close()
  returnScroll()
}
function returnScroll () {
  document.body.classList.remove('scroll-block')
}

call.forEach(el => {
  el.addEventListener('click', openConnectModal)
})
ask.forEach(el => {
  el.addEventListener('click', openQuestion)
})
popUpClose.forEach(el=> {
  el.addEventListener('click', closeModal)
})


popUpConnectEndBtn.addEventListener('click', openConnectEndModal)
popUpQuestionEndBtn.addEventListener('click', openQuestionEnd)

