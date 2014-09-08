var Teleportal = (function($) {
	'use strict';

	var mainContainer,
	app, ctx,
	templatesPath = 'templates/',
	storage = $.sessionStorage,
	authorised = false,
	newsType,

	doctors = {
		'stella': {
			'picture': 'doctor1.jpg',
			'name': 'dr Stella Rudovšek',
			'email': 'stella.rudovsek@testmail.org',
			'spec': 'Otorinolaringologija',
			'place': 'Univerzitetni klinični center Ljubljana',
			'description': 'UKC Ljubljana SPS Interna klinika KO za gastroenterologijo',	
			'tel': '+386 (0)1 522 21 13',
			'fax': '+386 (0)1 522 80 70', 
			'average': 4.3
		},
		'albert': {
			'picture': 'doctor2.jpg',
			'name': 'dr. med. Albert Dimić',
			'email': 'albert.dimic@testmail.org',
			'spec': 'Anesteziologija',
			'place': 'Univerzitetni klinični center Ljubljana',
			'description': 'UKC Ljubljana SPS Interna klinika KO za gastroenterologijo',	
			'tel': '+386 (0)1 522 21 13',
			'fax': '+386 (0)1 522 80 70', 
			'average': 4.7
		},
		'kovac': {
			'picture': 'doctor4.jpg',
			'name': 'dr Primož Kovač',
			'email': 'primoz.kovac@testmail.org',
			'spec': 'Ortopedska kirurgija',
			'place': 'Univerzitetni klinični center Ljubljana',
			'description': 'UKC Ljubljana SPS Interna klinika KO za gastroenterologijo',	
			'tel': '+386 (0)1 522 21 13',
			'fax': '+386 (0)1 522 80 70', 
			'average': 3.3
		},
		'mina': {
			'picture': 'doctor3.jpg',
			'name': 'dr Mina Kaleba',
			'email': 'mina.kaleba@testmail.org',
			'spec': 'Pediatrija',
			'place': 'Univerzitetni klinični center Ljubljana',
			'description': 'UKC Ljubljana SPS Interna klinika KO za gastroenterologijo',	
			'tel': '+386 (0)1 522 21 13',
			'fax': '+386 (0)1 522 80 70', 
			'average': 5.0
		},
		'fjodor': {
			'picture': 'doctor5.jpg',
			'name': 'dr.med. Fjodor Rusovski',
			'email': 'fjodor.rusovski@testmail.org',
			'spec': 'Gastroenterologija',
			'place': 'Univerzitetni klinični center Ljubljana',
			'description': 'UKC Ljubljana SPS Interna klinika KO za gastroenterologijo',	
			'tel': '+386 (0)1 522 21 13',
			'fax': '+386 (0)1 522 80 70', 
			'average': 4.8
		}
	}
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

			// novice
			this.get('#/novice-view/:type', function() {
				newsType = this.params.type;
				emptyMain();
				isAuthorised();
				ctx = this;
				Teleportal.header.init('novice_view', 1);

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

			this.get('#/video', function() {
				emptyMain();
				isAuthorised();
				ctx = this;
				Teleportal.header.init('video', 3);
			});

			this.get('#/forum-list', function() {
				emptyMain();
				isAuthorised();
				ctx = this;
				Teleportal.header.init('forum_1', 5);
			});

			this.get('#/forum/:topic/:header/:subtext', function() {
				emptyMain();
				isAuthorised();
				ctx = this;
				Teleportal.header.initForum(
					'forum-topic',
					5,
					this.params.topic,
					this.params.header,
					this.params.subtext
				);
			});

			this.get('#/forum-question/:topic/:idx', function() {
				console.log('question');
				emptyMain();
				isAuthorised();
				ctx = this;
				Teleportal.header.initQuestion(
					'forum-question',
					5,
					this.params.topic,
					this.params.idx
					);
			});

			this.get('#/ustanove', function() {
				emptyMain();
				isAuthorised();
				ctx = this;
				Teleportal.header.init('ustanove', 4);
			});

			this.get('#/question-list', function() {
				emptyMain();
				isAuthorised();
				ctx = this;
				authored();
				if (authorised) {
					Teleportal.header.init('question-list', 6);
				}
			});

			this.get('#/question-answers', function() {
				emptyMain();
				isAuthorised();
				ctx = this;
				authored();
				if (authorised) {
					Teleportal.header.init('question-answers', 6);
				}
			});

			this.get('#/doctor/:which', function() {
				emptyMain();
				isAuthorised();
				ctx = this;
				authored();
				if (authorised) {
					Teleportal.header.initDoctors('zdravnik', 6, this.params.which);
				}
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

	function authored() {
		if (!authorised) {
			ctx.redirect('#/');
		}
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
		},
		
		getDoctor: function(which) {
			return doctors[which];
		},

		getNewsType: function() {
			return  {'type': newsType};
		}

	};

})(jQuery);