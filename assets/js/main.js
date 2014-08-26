var Teleportal = (function($) {
	'use strict';

	var mainContainer,
	app, ctx,
	templatesPath = 'templates/',
	storage = $.sessionStorage,
	authorised = false
	;

	function init() {
		mainContainer = $('#main');
		// logIn();
		logOff();
		initSammy();
		isAuthorised();

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


	function isAuthorised() {
		authorised = storage.isSet('authorised');
		console.log(authorised);
		return authorised;
	}

	function logIn() {
		storage.set('authorised', true);
	}

	function logOff() {
		storage.remove('authorised');
	}

	return {
		init: init,
		getAuthorised: isAuthorised,
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