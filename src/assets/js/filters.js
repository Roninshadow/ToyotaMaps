const filter = document.querySelectorAll('.catalog__filters-list')

filter.forEach(el => {
  el.addEventListener('click', () => {
    el.classList.toggle('hidden-filters')
  })
})