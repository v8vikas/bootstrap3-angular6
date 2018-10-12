$(document).ready(() => {
  $('.mbTgl').click(function () {
    $('header').toggleClass('open');
  });
  $('.overlay, .mainMenu li a').click(function () {
    $('header').removeClass('open');
  });

  $(window).scroll(function () {
    var scrollDistance = $(window).scrollTop();
    $('.scrollDown').each(function (i) {
      if ($(this).position().top <= scrollDistance) {
        $('.fixBtmInr li.active').removeClass('active');
        $('.fixBtmInr li').eq(i).addClass('active');
      }
    });
  }).scroll();
});
