/* app.js
* main script file for our little application
* */

"use strict";

$(function() {


	$('section a[class!="back-to-top"]').attr('target', '_blank');

	var nav = $('nav');
	var navTop = nav.offset().top;
	var navHeight = nav.outerHeight();
	var jqWin = $(window);
	var navPlaceholder = $('.nav-placeholder');

	navPlaceholder.height(navHeight);

	$(window).scroll(function() {
		var scrollPos = $(this).scrollTop();
		// console.log(scrollPos);
		if (scrollPos > navTop) {
			nav.addClass('nav-fixed');
			navPlaceholder.show();
		}
		else {
			nav.removeClass('nav-fixed');
			navPlaceholder.hide();
		}
	});

	$('section').hide().fadeIn(1000);

	$('nav a, a[class="back-to-top"]').click(function(evetObject) {
		console.log(this.hash);
		var targetElement = $(this.hash);
		var targetTop = targetElement.offset().top;

		$('html, body').animate({scrollTop: targetTop - navHeight - 15}, 700)

		eventObject.preventDefault();

	});
});