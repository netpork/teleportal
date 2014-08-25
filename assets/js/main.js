var Teleportal = (function($) {
	'use strict';

	var mainContainer,
	app, ctx,
	templatesPath = 'templates/'
	;

	function init() {
		mainContainer = $('#main');
		initSammy();
		console.log('init');
	}	

	// start
	$(function() {
		init();	
	});
	
	function initSammy() {
		app = $.sammy('#main', function() {
			this.use('Mustache', 'ms');

			// home route
			this.get('#/', function() {
				ctx = this;
				Teleportal.header.init();
			});

		});

		app.debug = true;
		app.run('#/');
	}

	return {
		init: init,
		getMainContainer: function() {
			return mainContainer;
		},
		getContext: function() {
			return ctx;
		},
		getTemplatesPath: function() {
			return templatesPath;
		}
	};

})(jQuery);