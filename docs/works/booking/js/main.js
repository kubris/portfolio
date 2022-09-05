jQuery(document).ready(function() {

	$(".form-radio .radio-item").click(function(){
		//Spot switcher:
		$(this).parent().find(".radio-item").removeClass("active");
		$(this).addClass("active");
	});

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
	$("#phone").click(function(){
		$(this).setCursorPosition(3);
	}).mask("+7(999) 999-99-99");

	// run sending script
	$.ajaxSetup({cache: false}); 

	jQuery('#submit').click(function() {
		var form = jQuery(this).closest('form');

		$.ajax({
			type: 'POST',
			url: 'vendor/mail.php',
			data: form.serialize(),
			success: function(data) {
				$('#answer').html(data);
				$('#answer').css('display','block');
			},
			error: function(data) {
				alert('Error!');
				location.reload();
			}
		});
		return false;
	});

});