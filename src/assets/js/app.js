$(document).ready(() => {
  $('.mbTgl').click(function () {
    $('header').toggleClass('open');
  });
  $('.overlay, .mainMenu li a').click(function () {
    $('header').removeClass('open');
  });


  $('.fixBtmInr a').bind('click', function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top
    }, 600, function () {
      location.hash = target;
    });
    return false;
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
