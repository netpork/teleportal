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
		.appendTo(Teleportal.getMainContainer());
	}

	function setActive(idx) {
		var tabs = $('#navigation').find('li');
		$(tabs[idx]).addClass('active');
	}

	return {
		init: init
	};

}();