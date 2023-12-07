$(document).ready(() => {
    let scroll_top = $('.scroll-top');

    scroll_top.hide();
    $(window).scroll(() => {
        if ($(window).scrollTop() > 200) {
            scroll_top.show();
        } else {
            scroll_top.hide()
        }
    })

scroll_top.click(() => {
    $('html').animate({scrollTop:0}, 1000);
})










})