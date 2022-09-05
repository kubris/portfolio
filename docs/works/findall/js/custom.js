$(document).ready(function(){

});

// button "Up"
$(window).scroll(function () {
	if ($(this).scrollTop() > 1000) {
		$('#button-up').fadeIn();
	} else {
		$('#button-up').fadeOut();
	}
});

// button "Up" - slow move
$('#button-up').click(function () {
	$('body,html').animate({
		scrollTop: 0
	}, 800);
	return false;
});

// Scroll event
let scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
	var winWidth = $(window).width();

	// add fixed class to nav
	if ($(this).scrollTop() > 600) {
		$('header').addClass('header-fixed');
	} else {
		$('header').removeClass('header-fixed');
	}
	
	// show/hide nav
	if ( scrolled > 600 && scrolled > scrollPrev ) {
		$('header').removeClass('out');
	} else if ( scrolled < 100 ) {
		$('header').removeClass('out');
	} else {
		$('header').addClass('out');
	}
	scrollPrev = scrolled;

	// add dark text to main-nav when > 768px
	if ( scrolled > 100 && winWidth >= 768 ) {
		$('#top-navbar-block').addClass('dark-nav-text');
	} else {
		$("#top-navbar-block").removeClass("dark-nav-text");
	}
});
