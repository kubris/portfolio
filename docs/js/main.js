$(function(){
        $("a[href^='#']").click( function () {
                var _href = $(this).attr("href");
                $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
                return false;
        });
});

const toggleMenu = document.querySelector('.toggle-menu'); 
toggleMenu.addEventListener('click', function() {
	this.classList.toggle('active');
});
