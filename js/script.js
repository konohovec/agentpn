jQuery(document).ready(function($) {
	$('.menu__icon').click(function(event) {
		$('.menu__icon').toggleClass('_active');
	});
});

new Swiper ('.partners__content-slider', {
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
	autoHeight: true,
	slidesPerView: 2,
	mousewheel: {
		sensitivity: 1,
		eventsTarget: '.partners__content-slider',
	}
});

new Swiper ('.news__slider', {
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
	spaceBetween: 20,
	slidesPerView: 2,
	mousewheel: {
		sensitivity: 1,
		eventsTarget: '.news__slider',
	}
});