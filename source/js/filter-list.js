NodeList.prototype.forEach = Array.prototype.forEach;
var filterMainList = document.querySelector('.filter__main-list');
var filterMainToggle = document.querySelector('.filter__title');
var filterList = document.querySelectorAll('.filter__list');
var filterToggle = document.querySelector('.filter__link-item');

filterMainList.classList.remove('filter__list--nojs');
filterMainToggle.classList.remove('filter__toggle--nojs');
filterList.forEach(function(el) {
  el.classList.remove('filter__list--nojs');
})
filterToggle.classList.remove('filter__toggle--nojs');
filterMainToggle.classList.add('filter__main-toggle--open');
filterMainList.classList.add('filter--closed');
filterToggle.classList.add('filter__toggle--open');
filterList.forEach(function(el) {
  el.classList.add('filter--closed');
})

filterMainToggle.addEventListener('click', function () {
  filterMainList.classList.toggle('filter--closed');
  filterMainList.classList.toggle('filter--open');
  filterMainToggle.classList.toggle('filter__main-toggle--open');
  filterMainToggle.classList.toggle('filter__main-toggle--closed');
});

filterToggle.addEventListener('click', function () {
  filterList.classList.toggle('filter--closed');
  filterList.classList.toggle('filter--open');
  filterToggle.classList.toggle('filter__toggle--open');
  filterToggle.classList.toggle('filter__toggle--closed');
});
