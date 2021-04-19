jQuery(document).ready(function($) {
	$('.menu__icon').click(function(event) {
		$('.menu__icon, .header__list, .header__contacts_mobile, body').toggleClass('_active');
	});
	$('.header__link').click(function (){
		if ($('.menu__icon, .header__list, .header__contacts_mobile, body').hasClass('_active')){
			$('.menu__icon, .header__list, .header__contacts_mobile, body').removeClass("_active")
		}
	})
});

new Swiper ('.partners__content-slider', {
	scrollbar: {
		el: '.swiper-scrollbar',
		draggable: true,
	},
	autoHeight: true,
	slidesPerView: 3,
	mousewheel: {
		sensitivity: 1,
		eventsTarget: '.partners__content-slider',
	},
	breakpoints: {
		320: {
			spaceBetween: 8,
		}
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
	},
	breakpoints: {
		320: {
			spaceBetween: 8,
		}
	}
});

new Swiper ('.achievement__slider', {
	slidesPerView: 1,
});

new Swiper ('.info__slider', {
	slidesPerView: 1,
	autoHeight: true,
	spaceBetween: 8,
});

let elementForm = document.querySelector('#form__wrapper');
let elementCall = document.querySelector('#callback')
let Visible = function (target1, target2) {
	let targetPositionForm = {
		top: window.pageYOffset + target1.getBoundingClientRect().top,
	bottom: window.pageYOffset + target1.getBoundingClientRect().bottom
	};
	let targetPositionCall = {
		top: window.pageYOffset + target2.getBoundingClientRect().top,
		bottom: window.pageYOffset + target2.getBoundingClientRect().bottom
	};
	windowPosition = {
		top: window.pageYOffset,
		bottom: window.pageYOffset + document.documentElement.clientHeight
	};

	if (targetPositionForm.bottom > windowPosition.top && targetPositionForm.top < windowPosition.bottom || targetPositionCall.bottom > windowPosition.top && targetPositionCall.top < windowPosition.bottom) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
		$('.partners__content-button').addClass('fixed__button');
	} else {
		$('.partners__content-button').removeClass('fixed__button');
	};
};

window.addEventListener('scroll', function() {
	Visible (elementForm, elementCall);
});

Visible (elementForm, elementCall);