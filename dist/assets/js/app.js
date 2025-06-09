/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/Modal.js":
/*!********************************!*\
  !*** ./src/assets/js/Modal.js ***!
  \********************************/
/***/ (function() {

eval("const call  = document.querySelectorAll('.call')\r\nconst popUpConnect = document.getElementById('Connect')\r\nconst popUpConnectEnd = document.getElementById('ConnectEnd')\r\nconst popUpConnectEndBtn = document.getElementById('ConnectEndBtn')\r\n\r\nconst ask = document.querySelectorAll('.ask')\r\nconst popUpQuestion = document.getElementById('Question')\r\nconst popUpQuestionEnd = document.getElementById('QuestionEnd')\r\nconst popUpQuestionEndBtn = document.getElementById('QuestionEndBtn')\r\n\r\nconst popUpClose = document.querySelectorAll('.close')\r\n\r\n\r\nfunction openConnectModal () {\r\n  popUpConnect.showModal()\r\n  document.body.classList.add('scroll-block')\r\n}\r\nfunction openConnectEndModal() {\r\n\tcloseModal()\r\n\tpopUpConnectEnd.showModal()\r\n  document.body.classList.add('scroll-block')\r\n}\r\nfunction openQuestion () {\r\n  popUpQuestion.showModal()\r\n  document.body.classList.add('scroll-block')\r\n}\r\nfunction openQuestionEnd () {\r\n\tcloseModal()\r\n  popUpQuestionEnd.showModal()\r\n  document.body.classList.add('scroll-block')\r\n}\r\nfunction closeModal () {\r\n  popUpConnect.close()\r\n  popUpConnectEnd.close()\r\n  popUpQuestion.close()\r\n  popUpQuestionEnd.close()\r\n  returnScroll()\r\n}\r\nfunction returnScroll () {\r\n  document.body.classList.remove('scroll-block')\r\n}\r\n\r\ncall.forEach(el => {\r\n  el.addEventListener('click', openConnectModal)\r\n})\r\nask.forEach(el => {\r\n  el.addEventListener('click', openQuestion)\r\n})\r\npopUpClose.forEach(el=> {\r\n  el.addEventListener('click', closeModal)\r\n})\r\n\r\n\r\npopUpConnectEndBtn.addEventListener('click', openConnectEndModal)\r\npopUpQuestionEndBtn.addEventListener('click', openQuestionEnd)\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/Modal.js?");

/***/ }),

/***/ "./src/assets/js/card.js":
/*!*******************************!*\
  !*** ./src/assets/js/card.js ***!
  \*******************************/
/***/ (function() {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n\r\n\tconst basket_inner = document.getElementById('basket_js')\r\n\r\n  console.log('basket_inner:', basket_inner)\r\n\r\n\twindow.addEventListener('click', function (event) {\r\n\t\tif (event.target.hasAttribute('data-card')) {\r\n\t\t\tconst card = event.target.closest('.card')\r\n\t\t\tconst cardInfo = {\r\n\t\t\t\tavailability: card.querySelector('.availability') && card.querySelector('.availability').innerText,\r\n\t\t\t\timage: card.querySelector('.card-image') && card.querySelector('.card-image').getAttribute('src'),\r\n\t\t\t\ttitle: card.querySelector('.card-title') && card.querySelector('.card-title').innerText,\r\n\t\t\t\tprice: card.querySelector('.card-price') && card.querySelector('.card-price').innerText,\r\n\t\t\t}\r\n\t\t\tconsole.log(cardInfo)\r\n\t\t\tconst cardItem = `\r\n    <li class=\"basket__item\">\r\n\t\t\t<div class=\"basket-adaptives\">\r\n\t\t\t\t<img src=\"assets/images/b3ec12fca32531f1d54ab75efebe1f3ce9583f84.png\" alt=\"\" class=\"basket__item-image\" />\r\n\t\t\t\t<p class=\"basket__item-title\">${cardInfo.title}</p>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"basket-adaptives2\">\r\n\t\t\t\t<p class=\"basket__item-price\">${cardInfo.price}</p>\r\n\t\t\t\t<div class=\"basket__item-counter counter\">\r\n\t\t\t\t\t<button class=\"basket__item-minus minus\" data-action=\"minus\">\r\n\t\t\t\t\t  <img src=\"assets/images/Vector3.svg\" alt=\"\" class=\"basket__item-icon\" />\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<p class=\"basket__item-number quantity\">1</p>\r\n\t\t\t\t\t<button class=\"basket__item-plus plus\" data-action=\"plus\">\r\n\t\t\t\t\t\t<img src=\"assets/images/Vector3-1.svg\" alt=\"\" class=\"basket__item-icon\" />\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t\t<p class=\"basket__item-delete\">Удалить</p>\r\n\t\t\t</div>\r\n\t\t</li>\r\n    `\r\n\t\t\tbasket_inner.insertAdjacentHTML('beforeend', cardItem)\r\n\t\t}\r\n\t})\r\n})\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/card.js?");

/***/ }),

/***/ "./src/assets/js/counter.js":
/*!**********************************!*\
  !*** ./src/assets/js/counter.js ***!
  \**********************************/
/***/ (function() {

eval("window.addEventListener('click', event => {\r\n\tconst actionElement = event.target.closest('[data-action]')\r\n\tif (!actionElement) return // если не нашли, выходим\r\n\r\n\tconst action = actionElement.dataset.action\r\n\r\n\tif (action === 'plus' || action === 'minus') {\r\n\t\tconst counterWrapper = actionElement.closest('.counter')\r\n\t\tif (!counterWrapper) return\r\n\r\n\t\tconst counter = counterWrapper.querySelector('.quantity')\r\n\t\tif (!counter) return\r\n\r\n\t\tlet current = Number(counter.innerText)\r\n\r\n\t\tif (action === 'plus') {\r\n\t\t\tcounter.innerText = current + 1\r\n\t\t}\r\n\r\n\t\tif (action === 'minus') {\r\n\t\t\tcounter.innerText = Math.max(current - 1, 0)\r\n\t\t}\r\n\t}\r\n})\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/counter.js?");

/***/ }),

/***/ "./src/assets/js/faq.js":
/*!******************************!*\
  !*** ./src/assets/js/faq.js ***!
  \******************************/
/***/ (function() {

eval("const faq = document.querySelectorAll('.faq__item')\r\n\r\nfaq.forEach(faq_item => {\r\n\tfaq_item.addEventListener('click', () => {\r\n\t\tfaq.forEach(el => {\r\n\t\t\tif (el != faq_item) {\r\n\t\t\t\tel.classList.remove('active')\r\n\t\t\t}\r\n\t\t})\r\n\t\tfaq_item.classList.toggle('active')\r\n\t})\r\n})\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/faq.js?");

/***/ }),

/***/ "./src/assets/js/filters.js":
/*!**********************************!*\
  !*** ./src/assets/js/filters.js ***!
  \**********************************/
/***/ (function() {

eval("const filter = document.querySelectorAll('.catalog__filters-list')\r\n\r\nfilter.forEach(el => {\r\n  el.addEventListener('click', () => {\r\n    el.classList.toggle('hidden-filters')\r\n  })\r\n})\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/filters.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/card.js"]();
/******/ 	__webpack_modules__["./src/assets/js/counter.js"]();
/******/ 	__webpack_modules__["./src/assets/js/faq.js"]();
/******/ 	__webpack_modules__["./src/assets/js/filters.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/Modal.js"]();
/******/ 	
/******/ })()
;