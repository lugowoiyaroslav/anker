$(document).ready(function () {
	$(".header__home-slider").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: false,
	arrows: false,
	dots: true,
	adaptiveHeight: true
	});
	$("#leaders .slider__leaders").slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: false,
	arrows: true,
	dots: false,
	adaptiveHeight: true,
	nextArrow: '#leaders .slider__leaders-nav-next',
	prevArrow: '#leaders .slider__leaders-nav-prev',
	responsive: [
	{
	  breakpoint: 1100,
	  settings: {
		slidesToShow: 4,
		slidesToScroll: 1
	  }
	},
	{
	  breakpoint: 1024,
	  settings: {
		slidesToShow: 3,
		slidesToScroll: 1
	  }
	},
	{
	  breakpoint: 768,
	  settings: {
		slidesToShow: 2,
		slidesToScroll: 1
	  }
	},
	{
	  breakpoint: 480,
	  settings: {
		slidesToShow: 1,
		slidesToScroll: 1
	  }
	}
	]
	});
	$("#new-products .slider__leaders").slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: false,
	arrows: true,
	dots: false,
	adaptiveHeight: true,
	nextArrow: '#new-products .slider__leaders-nav-next',
	prevArrow: '#new-products .slider__leaders-nav-prev',
	responsive: [
	{
	  breakpoint: 1100,
	  settings: {
		slidesToShow: 4,
		slidesToScroll: 1
	  }
	},
	{
	  breakpoint: 1024,
	  settings: {
		slidesToShow: 3,
		slidesToScroll: 1
	  }
	},
	{
	  breakpoint: 768,
	  settings: {
		slidesToShow: 2,
		slidesToScroll: 1
	  }
	},
	{
	  breakpoint: 480,
	  settings: {
		slidesToShow: 1,
		slidesToScroll: 1
	  }
	}
	]
	});


	$(window).scroll(function () {
	if ($(window).scrollTop() > 30) {
		$('.header__home-menu').addClass('fixed_header');
	} else {
		$('.header__home-menu').removeClass('fixed_header');
	}
	});
	if ($(window).width() > 767) {
	$( ".header__home-menu" ).hover(function() {
		$(this).toggleClass('white');
	});
}
	$( ".slick-dots li" ).click(function() {
			$('.header__home-menu,.slider-item-container,.slick-dots').removeClass('dark');
	});
	$( ".slick-dots li:last-child" ).click(function() {
		if ( $(this).hasClass( "slick-active" ) ) {
			$('.header__home-menu,.slider-item-container,.slick-dots').addClass('dark');
		}
	});
		$( ".products__list-item-link" ).hover(function() {
		$(this).children().children('.dop__img').toggleClass('open-photo');
	});
		$(".category__nav > ul > li > ul").wrap('<div class="sub-menu" />');
		$( ".category__nav > ul > li" ).click(function() {
			$(this).addClass('current-cat');
			$(this).siblings().removeClass('current-cat');
			return false;
		});
		$(".rating-bg").css({'width': '89%'});
	$(".wpis-slider-for").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: false,
	arrows: true,
	asNavFor: '.wpis-slider-nav'
	});
	$(".wpis-slider-nav").slick({
	slidesToShow: 6,
	slidesToScroll: 1,
	asNavFor: '.wpis-slider-for',
	focusOnSelect: true,
	vertical: true,
	arrows: false
	});

	$('.wpis-slider-nav .slick-slide').removeClass('slick-active');
	$('.wpis-slider-nav .slick-slide').eq(0).addClass('slick-active');
	$('.wpis-slider-for').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
		var mySlideNumber = nextSlide;
		$('.wpis-slider-nav .slick-slide').removeClass('slick-active');
		$('.wpis-slider-nav .slick-slide').eq(mySlideNumber).addClass('slick-active');
	});

	var target = $('.anchor');
	if (target.length) {
	var targetPos = target.offset().top;
	var winHeight = $(window).height();
	var scrollToElem = targetPos;
	}

	$(window).scroll(function(){
		var winScrollTop = $(this).scrollTop();
		if(winScrollTop > scrollToElem){
			$('.header').hide();
			$('.anchor').addClass('fixed_header');
		}else{
			$('.header').show();
			$('.anchor').removeClass('fixed_header');
			}
		});

	$(".anchor").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});

var menu_selector = ".anchor";
function onScroll(){
	var scroll_top = $(document).scrollTop();
	$(menu_selector + " a").each(function(){
		var hash = $(this).attr("href");
		var target = $(hash);
		if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
			$(menu_selector + " a.active").removeClass("active");
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});
}

$(document).on("scroll", onScroll);
	$('a[href^="#"]:not([href="#"])').click(function(e){
		e.preventDefault();
		$(document).off("scroll");
		$(menu_selector + " a.active").removeClass("active");
		$(this).addClass("active");
		var hash = $(this).attr("href");
		var target = $(hash);
		$("html, body").animate({
			scrollTop: target.offset().top
		}, 500, function(){
			window.location.hash = hash;
			$(document).on("scroll", onScroll);
		});
	});
	$(".faq-content> a").on("click", function () {
		if ($(this).hasClass('active')) {
			$(this).removeClass("active");
			$(this).siblings('.faq-content p').slideUp(200);
			return false;
		} else {
			$(".faq-content> a").removeClass("active");
			$(this).addClass("active");
			$(this).parents('.faq-content').addClass("active");
			$('.faq-content p').slideUp(200);
			$(this).siblings('.faq-content p').slideDown(200);
			return false;
		}
	});
		$(window).scroll(function () {
	if ($(window).scrollTop() > 300) {
		$('.scroll__top').addClass('scroll_visible');
	} else {
		$('.scroll__top').removeClass('scroll_visible');
	}
	});
		$('.mob__menu').click(function () {
			$(this).toggleClass('menu__open');
			$('.menu').slideToggle('300');
			return false;
		});
		if ($(window).width() < 767) {
			$('.footer__top-menu h5,.footer__top-contacts h5').click(function () {
			$(this).toggleClass('active');
			$(this).next().slideToggle('300');
			return false;
		});
			$('.product__page-sumary > p').prependTo(".product__page-images");
			$('.product__page-sumary > h1').prependTo(".product__page-images");
			$('.shop__description-wrap h3').each(function() {
				$(this).addClass("mobile__h3");
				$(this).prependTo($(this).closest('.categories__description')); 
			});
		}
	var userAgent, ieReg, ie;
	userAgent = window.navigator.userAgent;
	ieReg = /msie|Trident.*rv[ :]*11\./gi;
	ie = ieReg.test(userAgent);

	if(ie) {
		$("body").addClass('ie');
	}
});