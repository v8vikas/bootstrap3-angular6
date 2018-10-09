$(document).ready(() => {
  $('.mbTgl').click(function () {
    $('header').toggleClass('open');
  });
  $('.overlay, .mainMenu li a').click(function () {
    $('header').removeClass('open');
  });
});
