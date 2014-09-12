Teleportal.header = function() {
	'use strict';

	var accordionState = true
	;

	function init(page, active, bolezen) {
		inject(page, active, bolezen);
	}

	function initForum(page, active, topic, header, subtext) {
		injectForum(page, active, topic, header, subtext);
	}

	function initQuestion(page, active, topic, index) {
		injectQuestion(page, active, topic, index);
	}

	function initDoctors(page, active, doctor) {
		injectDoctors(page, active, doctor);
	}

	function inject(page, active, bolezen) {
		Teleportal.getContext()
		.render(Teleportal.getTemplatesPath() + 'header.ms', {authorised: Teleportal.getAuthorised()})
		.appendTo(Teleportal.getMainContainer())
		.then(function() {
			console.log('header loaded');
			insertPage(page, bolezen);
			Teleportal.initEvents();
			setActive(active);
		});
	}

	function injectForum(page, active, topic, header, subtext) {
		Teleportal.getContext()
		.render(Teleportal.getTemplatesPath() + 'header.ms', {authorised: Teleportal.getAuthorised()})
		.appendTo(Teleportal.getMainContainer())
		.then(function() {
			console.log('header loaded');
			insertForum(page, topic, header, subtext);
			Teleportal.initEvents();
			setActive(active);
		});
	}

	function injectQuestion(page, active, topic, index) {
		console.log('qq');
		Teleportal.getContext()
		.render(Teleportal.getTemplatesPath() + 'header.ms', {authorised: Teleportal.getAuthorised()})
		.appendTo(Teleportal.getMainContainer())
		.then(function() {
			console.log('header loaded');
			insertQuestion(page, topic, index);
			Teleportal.initEvents();
			setActive(active);
		});

	}

	function injectDoctors(page, active, doctor) {
		Teleportal.getContext()
		.render(Teleportal.getTemplatesPath() + 'header.ms', {authorised: Teleportal.getAuthorised()})
		.appendTo(Teleportal.getMainContainer())
		.then(function() {
			console.log('header loaded');
			insertPageDoctors(page, doctor);
			Teleportal.initEvents();
			setActive(active);
		});
	}

	function insertPageDoctors(page, doc) {
		Teleportal.getContext().render(Teleportal.getTemplatesPath() + 'pages/' + page + '.ms', Teleportal.getDoctor(doc))
		.appendTo(Teleportal.getMainContainer())
		.then(function() {

		});
	}

	function insertPage(page, bolezen) {
		if (page === 'domov' && Teleportal.getAuthorised()) {
			page = 'domov-authorised';
		}

		if (page === 'novice' && Teleportal.getAuthorised()) {
			page = 'novice-authorised';
		}

		if (page === 'video' && Teleportal.getAuthorised()) {
			page = 'video-authorised';
		}

		if (page === 'ustanove' && Teleportal.getAuthorised()) {
			page = 'ustanove-authorised';
		}

		if (page === 'bolezni' && Teleportal.getAuthorised()) {
			page = 'bolezni-authorised';
		}

		if (page === 'novice_view') {
			Teleportal.getContext().render(Teleportal.getTemplatesPath() + 'pages/' + page + '.ms', Teleportal.getNewsType())
			.appendTo(Teleportal.getMainContainer())
			.then(function() {
			});

			return;
		}

		Teleportal.getContext().render(Teleportal.getTemplatesPath() + 'pages/' + page + '.ms')
		.appendTo(Teleportal.getMainContainer())
		.then(function() {
			if (page === 'domov' || page === 'domov-authorised') {
				makeBars();
				makeWeather();
			}

			// console.log(bolezen);

			if ((page === 'bolezni' || page === 'bolezni-authorised') && bolezen) {
				$('#' + bolezen).addClass('in');
				// scroll to
				var top = $('#anchor_' + bolezen).offset().top;
				$(window).scrollTop(top);
			}


			if (page === 'bolezni' || page === 'bolezni-authorised' || page === 'ustanove' || page === 'ustanove-authorised') {
				initCollapseControlButtons();
			}

			if (page === 'question-list' || page === 'question-answers') {
				makeRates();
			}
			// if (page === 'forum_1') {
			// 	Teleportal.forum.init();
			// }

		});
	}

	function insertForum(page, topic, header, subtext) {
		Teleportal.getContext().render(Teleportal.getTemplatesPath() + 'pages/' + page + '.ms', {
			'header': header,
			'subtext': subtext,
			'authored': Teleportal.getAuthorised()
		})
		.appendTo(Teleportal.getMainContainer())
		.then(function() {
			Teleportal.forum.forumPartial(topic);
		});
	}

	function insertQuestion(page, topic, index) {
		Teleportal.getContext().render(Teleportal.getTemplatesPath() + 'pages/' + page + '.ms', Teleportal.forum.getQuestion(topic, index))
		.appendTo(Teleportal.getMainContainer())
		.then(function() {
			// Teleportal.forum.forumPartial(topic);
		});
	}
	
	function setActive(idx) {
		var tabs = $('#navigation').find('li');
		$(tabs[idx]).addClass('active');
	}

	function makeBars() {
		$("#stats-registered").sparkline(
			// [5, 10, 11, 12, 15, 25,36,37,33,34,40,50,41],
			[2,4,3,6,7,5,8,9,4,2,6,8,8,9,10],
			{
    			type: 'bar',
    			height: '16'
    		});
	}

	function makeWeather() {
		var weather = new Skycons();
		weather.add('weather', Skycons.PARTLY_CLOUDY_DAY);
		weather.play();
	}

	function makeRates() {
		$('input.rating').rating();
	}

	function initCollapseControlButtons() {
		$('#accordion').on('show.bs.collapse', function () {
			if (accordionState) {
				$('#accordion .in').collapse('hide');
			}
		});

		$('#collapseControls').on('click', 'button', function() {
			// console.log($(this).data('button'));

			if ($(this).data('button') === 'show') {
				if (accordionState) {
					accordionState = false;
					$('.panel-collapse').collapse('show');
					$('.panel-title > a').attr('data-toggle','');
					
					$('#btn-collapse-show').toggleClass('hide');
					$('#btn-collapse-hide').toggleClass('hide');
					console.log('show');
				}
			} else {
				accordionState = true;
				$('.panel-collapse').collapse('hide');
				$('.panel-title > a').attr('data-toggle', 'collapse');

				$('#btn-collapse-hide').toggleClass('hide');
				$('#btn-collapse-show').toggleClass('hide');

				console.log('hide');
			}
		});
	}

	return {
		init: init,
		initForum: initForum,
		initQuestion: initQuestion,
		initDoctors: initDoctors
	};

}();