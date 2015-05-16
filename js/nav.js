$(document).ready(function(){
  var scroll_start = 0;
  var changenav = $('#home');
  var offset = changenav.offset();
  $(document).scroll(function() {
    scroll_start = $(this).scrollTop();
    if(scroll_start > offset.top) {
      $('.nav').css('background-color', '#3c3c3c');
      $('.nav').css('opacity', '0.95');
      $('.nav').css('height', '80px');
      $('.nav-left').css('padding', '28px 100px 28px 250px');
      $('.nav-left').css('font-size', '24px');
      $('ul.nav-menu').css('margin-top', '32px');
      $('.nav-menu li').css('font-size', '16px');
    } else {
      $('.nav').css('background-color', '#292929');
      $('.nav').css('opacity', '1');
      $('.nav').css('height', '100px');
      $('.nav-left').css('padding', '36px 100px 36px 250px');
      $('.nav-left').css('font-size', '28px');
      $('ul.nav-menu').css('margin-top', '41px');
      $('.nav-menu li').css('font-size', '18px');
    }
  });
});
