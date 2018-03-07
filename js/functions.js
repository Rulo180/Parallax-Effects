$(window).scroll(() => {

    let wScroll = $(this).scrollTop(),
        pContainerHeight = $('.header-box').height();

    if (wScroll <= pContainerHeight) {
        $('.logo').css({
            'transform': `translateY(${wScroll / 2}%)`
        });
    
        $('.back-bird').css({
            'transform': `translateY(${wScroll / 4}%)`
        });
    
        $('.foreground-bird').css({
            'transform': `translateY(${- wScroll * 0.005}%)`
        });
    }

    

    if (wScroll > $('.clothes').offset().top - ($(window).height() / 1.2)) {

        $('.clothes__figure').each((index) => {
            setTimeout(() => {
                $('.clothes__figure').eq(index).addClass('clothes__figure--is-showing');
            }, (700 * (Math.exp(index * 0.14))) - 700);
        });
    }

    let cwOffsetTop = $('.circle-window').offset().top,
        windowHeight = $(window).height();
    if (wScroll > cwOffsetTop - windowHeight) {
        $('.circle-window').css({
            'background-position': `center ${wScroll - cwOffsetTop}px`
        });

        let opacity = (wScroll - cwOffsetTop + 400)/ (wScroll/5);

        $('.circle-window__tint').css({
            'opacity': opacity
        });
    }

    let bOffsetTop = $('.blog').offset().top;
    if(wScroll > bOffsetTop - windowHeight) {
        let offsetLeft = Math.min(0, wScroll - bOffsetTop + windowHeight - 350),
            offset = Math.abs(offsetLeft);
        $('.blog__post--left').css({
            'transform': `translate(${offsetLeft}px, ${(20 + offset * 0.3)}px)`
        });

        $('.blog__post--right').css({
            'transform': `translate(${offset}px, ${(20 + offset * 0.3)}px)`
        });
    }

});
