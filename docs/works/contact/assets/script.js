$(document).ready(function() {

	// phone-field position of cursor action
	$.fn.setCursorPosition = function(pos) {
		if ($(this).get(0).setSelectionRange) {
			$(this).get(0).setSelectionRange(pos, pos);
		} else if ($(this).get(0).createTextRange) {
			var range = $(this).get(0).createTextRange();
			range.collapse(true);
			range.moveEnd('character', pos);
			range.moveStart('character', pos);
			range.select();
		}
	};

	// phone-field position set & mask
	$("#form-phone").click(function(){
		$(this).setCursorPosition(3);
	}).mask("+7(999) 999-99-99");
	
	// contact-form validate
	$(".contact-form").validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
			},
			email: {
				required: true,
				email: true,
			},
			text: {
				required: true,
				minlength: 4,
				maxlength: 500,
			},
		}, submitHandler: function (from) {
			ajaxFormSubmit();
		},
	});

	// run sending script
	function ajaxFormSubmit() {
		let th = $("#contactForm");

		$.ajax({			
			type: 'POST',
			url: 'assets/mail.php',
			data: th.serialize(),
			success: function(data) {
				$('.contact-form').slideUp();
				$('#answer').html(data);
			},
			error: function(data) {
				alert('Error!');
			}
		});
		return false;
	};
});