$(document).ready(function () {

// ==== link-relocation-delay ====
$(function(){
        $("a[href^='#']").click( function () {
                var _href = $(this).attr("href");
                $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
                return false;
        });
});

// ==== mobile-menu ====
const toggleMenu = document.querySelector('.toggle-menu'); // gamburger icon 
const mobileMenu = document.querySelector('.mobile-menu');  // mobile menu list
const overlay = document.querySelector('#overlay');  // overlay block
const tagBody = document.body;  // tag body

// ==== gamburger click ====
toggleMenu.addEventListener('click', function() {
	this.classList.toggle('toggle-menu--active');
	mobileMenu.classList.toggle('active');
	overlay.classList.toggle('active');
	tagBody.classList.toggle('noscroll');
});

// ==== mobile menu click ====
mobileMenu.addEventListener('click', function() {
	this.classList.remove('active');
	toggleMenu.classList.remove('toggle-menu--active');
	overlay.classList.remove('active');
	tagBody.classList.remove('noscroll');
});

// ==== overlay click  ====
overlay.addEventListener('click', function() {
	this.classList.remove('active');
	toggleMenu.classList.remove('toggle-menu--active');
	mobileMenu.classList.remove('active');
	tagBody.classList.remove('noscroll');
});

// ==== mixitup3 ====	
    let containerEl = document.querySelector('#works-block');

    let mixer = mixitup(containerEl, {
        classNames: {
            block: ""
        }
    });

});