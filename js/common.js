head.ready(function() {
	var btn_menu = $('.js-btn-menu'),
		btn_search = $('.js-btn-search'),
		btn_projects = $('.js-btn-projects'),
		menu = $('.js-menu'),
		menu_title = menu.find('.menu__title'),
		menu_list = menu.find('.menu__list'),
		search = $('.js-search'),
		search_select = search.find('.search__select'),
		projects = $('.js-projects'),
		projects_type = projects.find('.projects__type'),
		projects_list = projects.find('.projects__list'),
		projects_close = projects.find('.projects__close'),
		container = $('.js-container'),
		types = $('.js-types'),
		types_title = types.find('.types__title'),
		types_in = types.find('.types__in'),
		dp = $('.js-dp'),
		dp_el = dp.find('.dp__el'),
		dp_in = dp.find('.dp__in'),
		dp_close = dp.find('.dp__close'),
		btn_dp = $('.js-btn-dp'),
		text_toggle = $('.js-text-toggle'),
		slider = $('.js-slider'),
		body = $('body');
	// menu		
	btn_menu.on('click', function () {
		btn_menu.toggleClass('is-active');
		projects.removeClass('is-open');
		container.removeClass('is-moved-projects');
		container.toggleClass('is-moved-menu');
		menu.toggleClass('is-open');
	});

	// projects		
	btn_projects.on('click', function () {
		btn_projects.toggleClass('is-active');
		menu.removeClass('is-open');
		container.removeClass('is-moved-menu');
		container.toggleClass('is-moved-projects');
		projects.toggleClass('is-open');
		if ($('.js-btn-menu').hasClass('is-active')) {
			$('.js-btn-menu').removeClass('is-active');
		}
	});
	projects_close.on('click', function () {
		btn_projects.trigger('click');
		projects.toggleClass('is-open');
		container.toggleClass('is-moved-projects');
	});
	// projects accordeon
	projects_type.on('click', function () {
		if ($(this).hasClass('is-active')) {
			$(this).removeClass('is-active');
			$(this).next().slideUp();
		}
		else {
			projects_type.removeClass('is-active');
			projects_list.slideUp();
			$(this).addClass('is-active');
			$(this).next().slideDown();
		}
	});

	// touch
	$('body').swipe({
	  swipeLeft: function(event, direction, distance, duration, fingerCount) {
	  	menu.removeClass('is-open');
	  	projects.removeClass('is-open');
	  	container.removeClass('is-moved-menu is-moved-projects');
	  	btn_projects.removeClass('is-active')
	  	btn_menu.removeClass('is-active')
	  }
	});

	// search
	btn_search.on('click', function () {
		btn_search.toggleClass('is-active');
		search.slideDown();
		body.scrollTop(0);
	});

	$('.search__close').on('click', function() {
		btn_search.toggleClass('is-active');
		search.slideUp();
		return false;
	});
	// Audio Player
		$(document).ready(function() {
			$('#audio-player').mediaelementplayer({
				alwaysShowControls: true,
				features: ['playpause','volume','progress'],
				audioVolume: 'horizontal',
				audioWidth: 400,
				audioHeight: 40
			});
		});
	// end Audio Player
});