$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items: 1,
		navSpeed: 800,
		nav: true,
		dots: false,
		navText: ['',''],
		loop: true
	});
});

$(function(){
        $("a[href^='#']").click( function () {
                var _href = $(this).attr("href");
                $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
                return false;
        });
});