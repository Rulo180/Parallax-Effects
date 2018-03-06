$(window).scroll(() => {

    let wScroll = $(this).scrollTop();
    console.log(wScroll);

    $('.logo').css({
        'transform': `translateY(${wScroll / 2}%)`
    });

    $('.back-bird').css({
        'transform': `translateY(${wScroll / 4}%)`
    });

    $('.foreground-bird').css({
        'transform': `translateY(${- wScroll * 0.02}%)`
    });

});