Teleportal.header = function() {
	'use strict';

	function init(page, active, bolezen) {
		inject(page, active, bolezen);
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

	function insertPage(page, bolezen) {
		if (page === 'domov' && Teleportal.getAuthorised()) {
			page = 'domov-authorised';
		}

		
		Teleportal.getContext().render(Teleportal.getTemplatesPath() + '/pages/' + page + '.ms')
		.appendTo(Teleportal.getMainContainer())
		.then(function() {
			if (page === 'domov') {
				makeBars();
			}
			// console.log(bolezen);

			if (page === 'bolezni' && bolezen !== 'undefined') {
				$('#' + bolezen).addClass('in');
				// scroll to
				var top = $('#anchor_' + bolezen).offset().top;
				$(window).scrollTop(top);
			}

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

	return {
		init: init
	};

}();