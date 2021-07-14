$('.sec0').bxSlider({
    auto: true
});

// -----------nav---------------------------
var navi = $('nav ul li ')

navi.click(function () {
    var target = $(this)
    var index = target.index();
    $('html,body').animate({
        scrollTop: $('.cont>div').eq(index).offset().top
    }, 500)
})

var aside = $('aside ul li')

aside.click(function () {
    var target = $(this)
    var index = target.index();
    $('html,body').animate({
        scrollTop: $('.cont>div').eq(index).offset().top
    }, 500)
    $(this).addClass('on')
    $(this).siblings().removeClass('on')
})
// -----------aisde mark current page----------------------
$(window).scroll(function () {
    var Cscroll = $(this).scrollTop()
    var sec = $('.cont>div')
    var target = $(this)
    var index = target.index()

    sec.each(function () {
        var target = $(this)
        var index = target.index()

        if (Cscroll >= (target.offset().top) - $(window).height() / 5) {
            aside.siblings().removeClass('on')
            aside.eq(index).addClass('on')
        }
    })

    // ----asdie hidden in slide-------------
    if (Cscroll >= sec.eq(0).offset().top) {
        $('aside').removeClass('show')
    }
// ----sec1 text show-------
    if (Cscroll >= (sec.eq(1).offset().top) - $(window).height() / 3) {
        sec.eq(1).children('.text').addClass('show')
        $('aside').addClass('show')
    } else {
        sec.eq(1).find('.text').removeClass('show')
    }

    if (Cscroll >= (sec.eq(3).offset().top) - $(window).height() / 3) {
        sec.eq(3).find('article').addClass('show')
    } else {
        sec.eq(3).find('article').removeClass('show')
    }

    if (Cscroll >= (sec.eq(5).offset().top) - $(window).height() / 5) {

        sec.eq(5).find('.left').addClass('show')
        sec.eq(5).find('.right').addClass('show')
    } else {
        sec.eq(5).find('.left').removeClass('show')
        sec.eq(5).find('.right').removeClass('show')
    }
})
// -------------------se2------------------------
$('.art_2 .text>div').mouseenter(function () {
    var target = $(this).index()
    var bg = $('.sec2 .main_bg>div').eq(target)
    var art = $('.sec2 .art_1>.inner>div').eq(target)

    $(bg).addClass('active')
    $(bg).siblings().removeClass('active')
    $(art).addClass('active')
    $(art).siblings().removeClass('active')
})
// -----------------sec4----------------
$('.sec4 .room_text a').mouseenter(function () {
    var target = $(this).index()
    var left = $('.sec4 .left>div').eq(target)
    var right = $('.sec4 .right>div').eq(target)

    $(left).addClass('active')
    $(left).siblings().removeClass('active')
    $(right).addClass('active')
    $(right).siblings().removeClass('active')

    $(this).children('hr').addClass('active')
    $(this).siblings().children('hr').removeClass('active')
})