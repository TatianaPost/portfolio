//For Foundation 
$(document).foundation();

//For transition 
$('a[href^="#"]').click(function () {
    var the_id = $(this).attr("href");
    $('html, body').animate({
        scrollTop: $(the_id).offset().top
    }, 'slow');
    return false;
});

var widthParam = 1920 ; 

//For define the width and the height of the section
$(window).resize(function () {
    var menuWidth = $(".nav").height();
    $(".section").css("padding-top", menuWidth + 20 + 'px');
});

var menuWidth = $(".nav").height();
$(".section").css("padding-top", menuWidth + 25 + 'px');



//For responsive menu
$(function () {
    $('#menu').slicknav();
});

