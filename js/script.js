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
	slidesPerView: 2.5,
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
	slidesPerView: 1.7,
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
	slidesPerView: 2,
	
});

new Swiper ('.info__slider', {
	slidesPerView: 2,
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

$(function() {
    var btn = $('.scrollup');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '2000');
    });
})
var h_hght = 94; // высота шапки
var h_mrg = -10; // отступ когда шапка уже не видна

$(function() {

    var elem = $('.header-wrapper');
    var top = $(this).scrollTop();

    if (top > h_hght) {
        elem.css('top', h_mrg);
    }

    $(window).scroll(function() {
        top = $(this).scrollTop();

        if (top + h_mrg < h_hght) {
            elem.css('top', (h_hght - top));
        } else {
            elem.css('top', h_mrg);
        }
    });
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
});
