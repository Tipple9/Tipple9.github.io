$(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    $('.slider').css({
        'transform' : 'translate(0px, '+ wScroll /1 +'%)'
    });

});

var className = 'hasScrolled';

$(document).scroll(function() {
    if ($(document).scrollTop() >= 360) {
        // if user scrolled 300 pixels or more;
        $('.slider').fadeOut(300);
    }
    else {
        $('.slider').fadeIn(300);
    }
});
