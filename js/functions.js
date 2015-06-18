$(window).scroll(function(){

    var wScroll = $(this).scrollTop();

    $('.slider').css({
        'transform' : 'translate(0px, '+ wScroll /1 +'%)'
    });

});

var className = 'hasScrolled';

$(document).scroll(function() {
    if ($(document).scrollTop() >= 320) {
        // if user scrolled 300 pixels or more;
        $('.slider').fadeOut(100);
    }
    else {
        $('.slider').fadeIn(200);
    }
});
