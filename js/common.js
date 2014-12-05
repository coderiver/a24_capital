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
	btn_menu.on('click', function (event) {
		event.stopPropagation();
		// btn_menu.toggleClass('is-active');
		projects.removeClass('is-open');
		container.removeClass('is-moved-projects');
		container.toggleClass('is-moved-menu');
		// menu.toggleClass('is-open');
		// 
		if (btn_menu.hasClass('is-active')) {
			btn_menu.removeClass('is-active');
			menu.removeClass('is-open');
		}
		else {
			btn_menu.addClass('is-active');
			menu.addClass('is-open');		
		}
		if (!body.hasClass('no-scroll')) {
			var scroll_top = body.scrollTop();
			body.addClass('no-scroll');
			body.css('top', -scroll_top);
		}
		else {
			var pos_top = body.position().top,
					pos_top = -pos_top;
			body.css('top', 0);
			body.removeClass('no-scroll');
			body.scrollTop(pos_top);
		}
	});
	$('.overlay').on('click', function () {
		projects.removeClass('is-open');
		container.removeClass('is-moved-projects');
		container.removeClass('is-moved-menu');
		menu.removeClass('is-open');
		btn_menu.removeClass('is-active');
	});
	// menu.on('click', function (event) {
	// 	event.stopPropagation();
	// });
	// projects.on('click', function (event) {
	// 	event.stopPropagation();
	// });

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
	$('.overlay').on('click', function() {
		$('.js-projects, .js-menu').removeClass('is-open');
		$('body').removeClass('is-moved-menu');
		$('body').removeClass('is-moved-projects');
		$('.js-btn-menu').removeClass('is-active');
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
	// $('.audio-volume').on('click', function() {
	// 	$(this).parent('.audio-player').find('.ap').prop('muted');
	// 	$(this).toggleClass('is-active');
	// });
	$(".ap").prop('muted', false);

	 $(".audio-volume").click( function (){
	   if( $(".ap").prop('muted') ) {
	         $(".ap").prop('muted', false);
	   } else {
	     $(".ap").prop('muted', true);
	   }
	   $(this).toggleClass('is-active');
	});
	// var audio = document.getElementById('audio-player');

	// document.getElementById('mute').addEventListener('click', function (e)
	// {
	//     e = e || window.event;
	//     audio.muted = !audio.muted;
	//     e.preventDefault();
	// }, false);
	// $(".audio-volume").click( function (){
	// 	$(this).toggleClass('is-active');
	// });
	if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) {
		 body.addClass('is-ios');
	}
	window.addEventListener("orientationchange", function() {
		$('.menu').removeClass('is-open');
		$('.projects').removeClass('is-open');
		btn_menu.removeClass('is-active');
		container.removeClass('is-moved-projects');
		container.removeClass('is-moved-menu');
	}, false);
});