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
		// logOff();
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
				emptyMain();
				isAuthorised();
				ctx = this;
				Teleportal.header.init('domov', 0);
				console.count('main');
			});

			// novice
			this.get('#/novice', function() {
				emptyMain();
				isAuthorised();
				ctx = this;
				Teleportal.header.init('novice', 1);
			});

			// bolezni
			this.get('#/bolezni', function() {
				emptyMain();
				isAuthorised();
				ctx = this;
				Teleportal.header.init('bolezni', 2);
			});

			this.get('#/bolezni/:bolezen', function() {
				emptyMain();
				isAuthorised();
				ctx = this;
				var bolezen = this.params.bolezen;
				// console.log(params.has('bolezen'));
				Teleportal.header.init('bolezni', 2, bolezen);
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

	function initEvents() {
		$('#login-button').on('click', function(e) {
			// e.preventDefault();
			var email = $('#inputEmail').val();
			var password = $('#inputPassword').val();
			doLogin(email, password);
			console.count('prijava');
		});

		$('#logoutButton').on('click', function(e) {
			// e.preventDefault();
			logOff();
			emptyMain();
			location.reload();
		});
	}

	function doLogin(email, password) {
		if (email === "test" && password === "test") {
			logIn();
			$('#loginModal').modal('hide');
			console.log(ctx);
			location.reload();
		}
	}

	function emptyMain() {
		mainContainer.empty();
	}


	return {
		init: init,
		getAuthorised: isAuthorised,
		initEvents: initEvents,
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