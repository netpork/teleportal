Teleportal.header = function() {
	'use strict';

	function init() {
		inject();
	}

	function inject() {
		Teleportal.getContext()
		.render(Teleportal.getTemplatesPath() + 'header.ms', {data: 'data'})
		.appendTo(Teleportal.getMainContainer())
		.then(function() {
			console.log('header loaded');
		});
	}

	return {
		init: init
	};

}();