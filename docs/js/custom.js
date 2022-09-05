/* Mobile menu open-close*/
const menuToggle = document.querySelector('#menu-toggle');
const mobileNavContainer = document.querySelector('#mobile-nav');

menuToggle.onclick = function() {
	menuToggle.classList.toggle('menu-icon-active');
	mobileNavContainer.classList.toggle('mobile-nav--active');
}

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: (target.offset().top-100)
        }, 800, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

var smoothJumpUp = function() {
	if (document.body.scrollTop>0 || document.documentElement.scrollTop>0) {
		window.scrollBy(0,-50);
		setTimeout(smoothJumpUp, 10);
	}
}

window.onscroll = function() {
	var scrolled = window.pageYOffset || document.documentElement.scrollTop;
	if (scrolled > 100) {
		document.getElementById('upbutton').style.display = 'flex';
	} else {
		document.getElementById('upbutton').style.display = 'none';
	}
}

/*Input type file tuning*/
function getFileInput() {
var file = document.getElementById('uploaded-file').value;
file = file.replace(/\\/g, "/").split('/').pop();
document.getElementById('file-name').innerHTML = file;
}
