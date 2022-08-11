$(document).ready(function(){
	$('.header-testimonial').slick({
		accessibility: true,
		arrows: true,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		cssEase: 'linear',
		fade: false,
		responsive: [
			{
				breakpoint: 940,
				settings: {
					swipe: true,
					swipeToSlide: true,
					touchMove: true
				}
			}
		]
	});
});