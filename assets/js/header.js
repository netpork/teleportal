Teleportal.header = function() {
	'use strict';

	function init() {
		inject();
	}

	function inject() {
		Teleportal.getContext()
		.render(Teleportal.getTemplatesPath() + 'header.ms', {authorised: Teleportal.getAuthorised()})
		.appendTo(Teleportal.getMainContainer())
		.then(function() {
			console.log('header loaded');
			insertPage();
		});
	}

	function insertPage() {
		Teleportal.getContext().render(Teleportal.getTemplatesPath() + '/pages/domov.ms')
		.appendTo(Teleportal.getMainContainer());
	}

	return {
		init: init
	};

}();