$(function ($) {
	// pre loader
	$(window).on("load", function () {
		$(".preloader").delay(1000).fadeOut(1000);
	});


	// window scroll set
	// window.onload = function () {
	// 	window.setTimeout(function () {
	// 		window.scrollTo(0, 0);
	// 	}, 10);
	// };


	// banner slider js
	$('.banner').slick({
		arrows: false,
		infinite: true,
		speed: 1000,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		dots: false,
		autoplay: true,
		slidesToScroll: 1, 
		// prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
		// nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
	});
//   }).slickAnimation();


	// menu top
	// var menuTop = $(".menu").offset().top;
	var menuTop = 70;
	// alert(menuTop);
	$(window).on("scroll", function () {
		var scrTop = $(window).scrollTop();
		//alert(scrTop);
		//menu js
		if (scrTop > menuTop) {
			$(".navbar").addClass("fixed");
		} else {
			$(".navbar").removeClass("fixed");
		}

		//back to top button js
		// if (scrTop > 200) {
		//     $(".backTop").fadeIn(1000);
		// } else {
		//     $(".backTop").fadeOut(1000);
		// }
	});
	// $(".backTop").on("click", function () {
	// 	$("html,body").animate(
	// 		{
	// 			scrollTop: 0,
	// 		},
	// 		500
	// 	);
	// });


	// venobox js
	$(".venobox").venobox({
		spinner: "three-bounce",
		spinColor: "#02918c",
		closeColor: "red",
		// arrowsColor: "#02918c",
	});


	// video veno-box js
	// $(".venobox").venobox();
	$("#vidBox").VideoPopUp({
		backgroundColor: "#17212a",
		opener: "trigger",
		maxweight: "640",
		idvideo: "example",
	});


	//filtarizer js
	$(".filter-container").filterizr({
		filter: "all",
		layout: "sameSize",
	});

	$(".filter_menu ul li").on("click", function () {
		$(".filter_menu ul li").removeClass("fil_active");
		$(this).addClass("fil_active");
	});


	//testimonial slider
	$(".testimonial-slide").slick({
		slidesToShow: 4,
		slidesToScroll: 2,
		arrows: false,
		dots: true,
		autoplay: false,
		dotsClass: "blog_dots",
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});


	//blog slider
	$(".blog-slide").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 3000,
		dotsClass: "blog_dots",
		cssEase: "linear",
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	  
	// partnership slider js
	$(".clients-slider").slick({
		dots: false,
		arrows: false,
		infinite: true,
		speed: 800,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		// speed: 3000,
		// prevArrow: '<i class="bi bi-chevron-left icon left"></i>',
		// nextArrow: '<i class="bi bi-chevron-right icon right"></i>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	});


	// peb factory gallery popup js
	$(".factory-container").magnificPopup({
		delegate: "a",
		type: "image",
		gallery: {
			enabled: true,
		},
		removalDelay: 300,
		mainClass: "mfp-fade",
	});


	// certificate slider js
	$(".certificate-main").slick({
		dots: false,
		infinite: true,
		speed: 1000,
		slidesToShow: 4,
		autoplay: false,
		slidesToScroll: 1,
		prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
		nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});


	//counter js 
	$(".counter").counterUp({
		delay: 10,
		time: 2000,
	});

	

});

AOS.init({
	duration: 1200,
});


function process1Fun() {
	document.getElementById("process1").style.display = "block";
	document.getElementById("process2").style.display = "none";
	document.getElementById("process3").style.display = "none";
	document.getElementById("process4").style.display = "none";
}
function process2Fun() {
	document.getElementById("process1").style.display = "none";
	document.getElementById("process2").style.display = "block";
	document.getElementById("process3").style.display = "none";
	document.getElementById("process4").style.display = "none";
}
function process3Fun() {
	document.getElementById("process1").style.display = "none";
	document.getElementById("process2").style.display = "none";
	document.getElementById("process3").style.display = "block";
	document.getElementById("process4").style.display = "none";
}
function process4Fun() {
	document.getElementById("process1").style.display = "none";
	document.getElementById("process2").style.display = "none";
	document.getElementById("process3").style.display = "none";
	document.getElementById("process4").style.display = "block";
}