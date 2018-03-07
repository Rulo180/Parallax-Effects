$(window).scroll(() => {

    let wScroll = $(this).scrollTop();

    $('.logo').css({
        'transform': `translateY(${wScroll / 2}%)`
    });

    $('.back-bird').css({
        'transform': `translateY(${wScroll / 4}%)`
    });

    $('.foreground-bird').css({
        'transform': `translateY(${- wScroll * 0.02}%)`
    });

    if (wScroll > $('.clothes').offset().top - ($(window).height() / 1.2)) {

        $('.clothes__figure').each((index) => {
            setTimeout(() => {
                $('.clothes__figure').eq(index).addClass('clothes__figure--is-showing');
            }, 150 * (index + 1));
        });
    }

    let distFromTop = $('.circle-window').offset().top,
        windowHeight = $(window).height();
    if (wScroll > distFromTop - windowHeight) {
        console.log("Hy");
        $('.circle-window').css({
            'background-position': `center ${wScroll - distFromTop}px`
        });

        let cwtOpacity = (wScroll - distFromTop + 400)/ (wScroll/5);

        $('.circle-window__tint').css({
            'opacity': cwtOpacity
        });
    }

});