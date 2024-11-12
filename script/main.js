$(function(){

    let count = 0;

    $('.all-slide li').eq(count).fadeIn(1000);

    setInterval(function(){
        count++;
        count %= $('.all-slide li').length;
    $('.all-slide li').eq(count).fadeIn(1000).siblings().fadeOut(1000)}, 3000);

    $('.ab-box .open-btn').on('click', function(){
        $('.modal').addClass('show')
    });

    $('.modal .close-btn').on('click', function(){
        $('.modal').removeClass('show')
    });

});