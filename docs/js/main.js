$(document).ready(function () {
	// ==== link-relocation-delay ====
	$(function () {
		$("a[href^='#']").click(function () {
			var _href = $(this).attr("href");
			$("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
			return false;
		});
	});

	// ==== mobile-menu ====================
	const toggleMenu = document.querySelector(".toggle-menu"); // gamburger icon
	const mobileMenu = document.querySelector(".mobile-menu"); // mobile menu list
	const overlay = document.querySelector("#overlay"); // overlay block
	const tagBody = document.body; // tag body
	const mobileLinks = document.querySelectorAll(".mobile-menu__link"); 

	// ==== gamburger click ====
	toggleMenu.addEventListener("click", function () {
		this.classList.toggle("toggle-menu--active");
		mobileMenu.classList.toggle("active");
		overlay.classList.toggle("active");
		tagBody.classList.toggle("noscroll");
	});

	// ==== mobile menu click ====
	mobileMenu.addEventListener("click", function () {
		this.classList.remove("active");
		toggleMenu.classList.remove("toggle-menu--active");
		overlay.classList.remove("active");
		tagBody.classList.remove("noscroll");
	});

	// ==== overlay click  ====
	overlay.addEventListener("click", function () {
		this.classList.remove("active");
		toggleMenu.classList.remove("toggle-menu--active");
		mobileMenu.classList.remove("active");
		tagBody.classList.remove("noscroll");
	});
	
	// ==== Link click  ====
	for(let item of mobileLinks) {
		item.addEventListener("click", function () {
			overlay.classList.remove("active");
			toggleMenu.classList.remove("toggle-menu--active");
			mobileMenu.classList.remove("active");
			tagBody.classList.remove("noscroll");
			});
	};

	// FORM - placeholder
	const formItems = document.querySelectorAll('.contacts-form__item')
	for(let item of formItems) {
		const thisParent = item.closest('.contacts-form__cell');
		const thisPlaceholder = thisParent.querySelector('.contacts-form__label');

		item.addEventListener('focus', function() {
			thisPlaceholder.classList.add('label-active');
		});

		item.addEventListener('blur', function() {
			if (item.value.length > 0) {
				thisPlaceholder.classList.add('label-active');
			} else {
				thisPlaceholder.classList.remove('label-active');
			}
		});
	}
	// ==== end of a mobile-menu =====

	// ==== mixitup3 ====
	let containerEl = document.querySelector('#works-block');
	let mixer = mixitup(containerEl, {
		classNames: {
			block: ""
		}
	});

	// add/remove two big cards in portfolio
	const filterToggles = document.querySelectorAll('.works-buttons__block button');
	const portfolioBigCards = document.querySelectorAll('.works-card');
	for (let i = 0; i < filterToggles.length; i++) {
		filterToggles[i].addEventListener('click', function () {
			if (i == 0) {
				for (let j = 0; j < 2; j++) {
					portfolioBigCards[j].classList.add('works-card--big');
				}
			} else {
				for (let j = 0; j < 2; j++) {
					portfolioBigCards[j].classList.remove('works-card--big');
				}
			}
		});
	}

	// show/hide work-cards when the page is loading
	if ($(window).width() < 1200) {
		$('.works-card.hide-card').hide();
		$('.works-card__btn').on('click', function() {
			$('.works-card.hide-card').fadeIn();
			$(this).hide();
		});
	} else {
		$('.works-card.hide-card').fadeIn();
		$(this).hide();
	}

	// show/hide work-cards when the page is resizing
	$(window).on('resize',function() {
		if($(window).width() < 1200) {
			$('.works-card.hide-card').hide();
			$('.works-card__btn').fadeIn();

			$('.works-card__btn').on('click', function() {
				$('.works-card.hide-card').fadeIn();
				$(this).css('display', 'none');
			});
		} else {
			$('.works-card.hide-card').fadeIn();
			$('.works-card__btn').hide();
		}
	});

	// Create page-nav dots
	$("#page-nav").onePageNav({
		currentClass: "active",
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: "",
		easing: "swing",
		begin: function () {},
		end: function () {},
		scrollChange: function ($currentListItem) {},
	});

	// FORM VALIDATE
	$('#contacts-form').validate({
		rules: {
			email: {
				required: true,
				email: true,
			},
			subject: {
				required: true,
			},
			message: {
				required: true,
			},
		},
		messages: {
			email: {
				required: "Введите email",
				email: "Отсутствует символ @",
			},
			subject: {
				required: "Введите тему сообщения",
			},
			message: {
				required: "Введите текст сообщения",
			}
		},
		submitHandler: function(from) {
			ajaxFormSubmit();
		}
	});

	// Send message by contacts-form
	function ajaxFormSubmit() {
		let string = $(".contacts-form").serialize();
		$.ajax({
			type: "POST",
			url: "php/mail.php",
			data: string,
			success: function(html) {
				$(".contacts-form").slideUp(800);
				$("#answer").html(html);
			}
		});
		return false;
	}

	// Paralax-effect on contacts-form
	let prxScene = document.querySelector('.contacts');
	let prxItems = document.querySelectorAll('.move-quote');
	prxScene.addEventListener('mousemove', function (e) {
		let x = e.clientX / window.innerWidth;
		let y = e.clientY / window.innerHeight;
		for (let item of prxItems) {
			item.style.transform = 'translate(-' + x * 35 + 'px, -' + y * 35 + 'px)';
		}
	});
})
