$(function () {
  let $filterMainList = $('.filter__main-list');
  let $filterMainToggle = $('.filter__title');
  let $filterList = $('.filter__list');
  let $filterToggle = $('.filter__link-item');

  $filterMainList
    .removeClass('filter__list--nojs')
    .addClass('filter--closed');

  $filterMainToggle
    // .removeClass('filter__toggle--nojs')
    .addClass('filter__main-toggle--open');

  $filterList
    .removeClass('filter__list--nojs')
    .removeClass('filter--closed')
    .addClass('filter--open');

  $filterToggle
    .removeClass('filter__toggle--nojs')
    .removeClass('filter__toggle--closed')
    .addClass('filter__toggle--open');

  $filterMainToggle.on('click', function (e) {
    $filterMainList
      .toggleClass('filter--closed')
      .toggleClass('filter--open');

    $filterList
      .addClass('filter--closed')
      .removeClass('filter--open');

    $filterMainToggle
      .toggleClass('filter__main-toggle--open')
      .toggleClass('filter__main-toggle--closed');

    $filterToggle
      .removeClass('filter__toggle--closed')
      .addClass('filter__toggle--open');

    return false;
  })

  $filterToggle.on('click', function (e) {
    e.preventDefault();
    console.log('$filterToggle')

    let $closestFilter = $(this).siblings('.filter__list');

    $closestFilter
      .toggleClass('filter--closed')
      .toggleClass('filter--open');

    $(this)
      .toggleClass('filter__toggle--open')
      .toggleClass('filter__toggle--closed');

    return false;
  })
})
