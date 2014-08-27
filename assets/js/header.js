Teleportal.header = function() {
	'use strict';

	function init(page, active) {
		inject(page, active);
	}

	function inject(page, active) {
		Teleportal.getContext()
		.render(Teleportal.getTemplatesPath() + 'header.ms', {authorised: Teleportal.getAuthorised()})
		.appendTo(Teleportal.getMainContainer())
		.then(function() {
			console.log('header loaded');
			insertPage(page);
			Teleportal.initEvents();
			setActive(active);
		});
	}

	function insertPage(page) {
		Teleportal.getContext().render(Teleportal.getTemplatesPath() + '/pages/' + page + '.ms')
		.appendTo(Teleportal.getMainContainer())
		.then(function() {
			if (page === 'domov') {
				makeBars();
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