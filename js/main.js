$(document).ready(function () {
  $('.header__burger').on('click', function () {
    $('.header__menu').toggleClass('header__menu--open');
    $('.header__menu-burger').toggleClass('header__menu-burger--active');
  });
});