$(function ($) {
	// pre loader
	$(window).on("load", function () {
		$(".preloader").delay(1000).fadeOut(1000);
	});

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

	// light box js
	$(".venobox").venobox({
		spinner: "three-bounce",
		spinColor: "#02918c",
		closeColor: "red",
		// arrowsColor: "#02918c",
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

	//blog slider
	$(".blog-slide").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 2000,
		dotsClass: "blog_dots",
	});
});

AOS.init({
	duration: 1200,
});
