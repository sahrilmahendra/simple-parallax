$(window).scroll(function(){
    const windowScroll = $(this).scrollTop();

    $('h1').css({
        'transform' : 'translate(0, ' + windowScroll/2 + '%)'
    });

    $('.kotak').css({
        'transform' : 'translate(0, ' + windowScroll/10 + '%)'
    });
});