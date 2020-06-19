$(document).ready(function () {
	$(window).resize(function (event) {
		adaptive_function();
	});
	function adaptive_header(w, h) {
		var headerMenu = $('.header-menu');
		var navList = $('.nav-list');
		var nav = $('.nav');
		if (w < 767) {
			if (!navList.hasClass('done')) {
				navList.addClass('done').appendTo(headerMenu);
			}
		} else {
			if (navList.hasClass('done')) {
				navList.removeClass('done').appendTo(nav);
			}
		}
	}

	function adaptive_function() {
		var w = $(window).outerWidth();
		var h = $(window).outerHeight();
		adaptive_header(w, h);
	}
	adaptive_function();
	$('.burger').click(function (event) {
		$('.burger, .nav').toggleClass('active');
		$('.header-menu').slideToggle(500);
		$('body').toggleClass('lock');
	});
	$('.burger.active, .nav-list__item').click(function (event) {
		$('.burger, .nav').removeClass('active');
		$('.header-menu').slideUp(500);
		$('body').removeClass('lock');
	});


	$('.boards-slider').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		centerMode: true,
		centerPadding: "30px",
		responsive: [
			{
				breakpoint: 767.98,
				settings: "unslick"
			}
		]
	});
	function unSlick() {
		let ww = $(window).outerWidth();
		if (ww < 767.98) {
			$('.board-slide').eq(0).show().siblings().hide();

		}
	}
	unSlick();

	$('.board-slide').each(function () {
		$(this).find('.tab-title').eq(0).addClass('open');
		$(this).find('.tab-text').eq(0).addClass('open').siblings().removeClass('open');
		$(this).find('.tab-text').niceScroll({ cursorcolor: '#00b0ff' });
	});

	$('.tab-title').click(function () {
		let indexOfSlide = $(this).parents('.board-slide').index();
		let indexOfTabTitle = $(this).index();
		$('.board-slide').eq(indexOfSlide).find('.tab-title').eq(indexOfTabTitle).addClass('open').siblings().removeClass('open');
		$('.board-slide').eq(indexOfSlide).find('.tab-text').eq(indexOfTabTitle).addClass('open').siblings().removeClass('open');

	});


	$('.preview-item').click(function (event) {
		let minImg = $(this).children('img').attr('src');
		let indexOfSlide = $(this).parents('.board-slide').index();
		$('.board-slide').eq(indexOfSlide).find('.expanded-img').attr('src', minImg);
		$(this).siblings().removeClass('active');
		$(this).toggleClass('active');
	});


	function ibg() {
		$.each($('.ibg'), function (index, val) {
			if ($(this).find('img').length > 0) {
				$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
			}
		});
	}
	ibg();




});
