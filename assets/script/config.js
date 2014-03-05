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


//For define the width and the height of the section
$(window).resize(function () {
    var width = $(window).width();
    var height = $(window).height();
    var menuWidth = $(".nav").height();
    $(".section").css("padding-top", menuWidth + 20 + 'px');
    $(".section").css("width", width);
    if (width <= 1015) {
        $(".section").css("height", 100 + '%');
    } else {
        $(".section").css("height", height);
    }
});

var width = $(window).width();
var height = $(window).height();
var menuWidth = $(".nav").height();
$(".section").css("padding-top", menuWidth + 25 + 'px');
$(".section").css("width", width);
if (width <= 1015) {
    $(".section").css("height", 100 + '%');
} else {
    $(".section").css("height", height);
}


//For responsive menu
$(function () {
    $('#menu').slicknav();
});