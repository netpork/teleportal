Teleportal.forum = function() {
	'use strict';

	var container;
	
	var topics = {
		'anxiety': [
			{
				'title': 'Anxiety back trying to taper off Xanax with Lyricia',
				'question': "Hi, I'm new here. Just wondering if anyone has ever got off of Xanax compleatly. I've been put on Lyricia to help with this but my anxiety seems to be worse in the last few days only started decreasing Xanax by .25mg a day and started 25mg of Lyricia Friday. Not sure if it's the new tab or just cutting down the Xanax. I've been on Xanax for over 15 years different doses I'm on .5mg 3times a day have just cut that by .25mg a day. Wondering if anyone ever got off these tablets. Any suggestions would be great. Thanks",
				'author': 'crazyfrog',
				'answer1_title': 'rosemary » crazyfrog',
				'answer1_text': "be very careful with pregabalin/lyrica, I only took 28x25mg capsules over 21 days,  and I am addicted to it, I have just about  every side effect  listed, plus lots not listed,  from day one I knew from the first cap that I didnt want to take it because side effects were instant, but the attitude was 'take it or else'  I have been trying to withdraw it since july. I feel very ill and it has chaged me completely, I am alter ego, I am like drunk andy pandy,  my legs are weak,wobbly, I stagger like a drunk, I am using liquid with a syringe to cut down with a smaller dose, but even this is hit and miss, today has been awful, as are most days,  I have pain in belly,like a hot sensation, someone pulling and squeezing,  I just want it all to be over..  some will say it's ok for them, but for me it has made me very ill, pain , which I didn't have before is excruciating, not relieved by the medication, if in any doubt about whether to use it , could you cope with what I have just described ? . take care, bye,rosie.",
				'answer1_author': 'rosemary',
				'answer2_title': 'crazyfrog » rosemary',
				'answer2_text': "Thanks for taking time to reply. I find it hard enough to carry on the way I am for the last few days Idon't want to become addicted to this as well they sound awful. I thought the would help as I reduced my dosage of Xanax which I've been on for more than 15 yrs. I want to get off them as they are not doing anything for me but I know I can't go cold tukey it's too dangerous. I've loads of different meds tried over the years for anxiety,panic,agoraphobia PTSD and depression. I'm in therapy and attend a support group once a week. Doc wanted me to try seroquil (you heard of it?)a few months ago I didn't even try them. Just don't know what to do anymore the anxiety is high at the moment it seems to be there all day until i finally get to sleep.will go to doc again tomorrow see what he says.I hope you withdraw from it safely and you feel better soon best of luck and thanks for your advice.",
				'answer2_author': 'crazyfrog',

				'views': function() {
					return function() {
						return ' ' + Teleportal.forum.randValue();
					};
				},
				'index': 0,
				'topic': 'anxiety'

			},

			{
				'title': 'Health anxiety!',
				'question': "Hi, newbie here looking for... well to be honest I don't know whether it's answers, reassurance, or just a friendly opinion I'm looking for, but all are welcome. I'm a man in my 30s and for the past few years have been suffering from anxiety. Before the anxiety I was confident, enjoying work, had more friends than I had time to spend with, and was earning good money. Everything revolved around my social life. It was the reason I worked, and all I thought about during the day - what I could get up to at the weekend. Stress and anxiety was something that other people suffered from, but not me. I wasn't interested in settling down, not unusual for a guy in his 20s. Then completely out of the blue, I met a girl. A wonderful, gorgeous, kind, and funny girl, and immediately this changed me. She was the one. In case anyone assumes this is a story about how this girl broke my heart, this is not the case. We are still together, very much in love, engaged, and have a beautiful 2 year old son.",
				'author': 'jasmine',
				'views': function() {
					return function() {
						return ' ' + Teleportal.forum.randValue();
					};
				},
				'index': 1,
				'topic': 'anxiety'

			},

			{
				'title': 'Chronic anxious insomnia - will citalopram help eventually?',
				'question': "Hi there! I was on citalopram years ago for anxiety and it really helped, I was on it for a long time. Lately I started feeling anxious again, which has now heightened to severe at night time - when I go to bed it feels like my heart might explode in my chest. There is just no way of relaxing, except when I take 1 zopiclone. I don't want to take these forever I know they're addictive, but I'm wondering if anyone has had this experience? I'm hoping once the citalopram kicks back in I'll feel strong and if I don't sleep I'll be able to cope, just at the moment feeling anxious in bed all night sets me up for a terrible day the next day. I used to sleep fine when I was on citalopram (20mg and even 10mg) but I didn't really have sleeping problems before then. Can anyone help?",
				'author': 'ahmad',
				'views': function() {
					return function() {
						return ' ' + Teleportal.forum.randValue();
					};
				},
				'index': 2,
				'topic': 'anxiety'

			},

			{
				'title': 'Help - Anxiety Chest Pain or acid reflux?',
				'question': "Hi guys, I think I’m going crazy. I have had chest pains on the left side of my chest for the last couple of months now. I have it on and off every day. It’s either right in the middle at the bottom of my rib cage or up at the top below the first rib. I have had a couple of ECG’s, xray, echocardiogram, and various blood tests. Everything has come back normal but as soon as I have the pain I go back to thinking there is problem. The doctors have said its anxiety related and 7 weeks ago put me on 40mg of citalopram. The citalopram has really helped my worrying but it’s not taken away the pain. A couple of people have said that it could be due to acid reflux but can acid reflux give you a pain that radiates all over the left side of my chest and arm? I feel slighty lost at the moment to be honest and I just want to enjoy life. Andy",
				'author': 'littleNarruto',
				'views': function() {
					return function() {
						return ' ' + Teleportal.forum.randValue();
					};
				},
				'index': 3,
				'topic': 'anxiety'
	
			},
		
			{
				'title': 'how much physical pain can anxiety actually cause?',
				'question': "I haven't posted for a while, but basically for some time I had been suffering with severe chest pains, initially the doctors thought I had a hiatus hernia, I was treated with esomeperazole, I also had a gastroscopy but this came back clear. I then had some scans and xrays and it shew two very small kidney stones, I was then told I had a form of ibs, ive been switched from med to med. I took myself to hospital one night as I was convinced I was dying from heart issues, I had ecgs and xrays and blood tests and all came back ok but still suffering with pain, my latest trip to the doctors I got told I had costochondritis, now been put on naproxen but still no ease from the pain. Ijust wondered if anxiety is able to cause such severe constant pain? I do worry a lot which in turn makes the pain worse which makes the anxiety worse and so on...please can anyone help? X",
				'author': 'eski',
				'views': function() {
					return function() {
						return ' ' + Teleportal.forum.randValue();
					};
				},
				'index': 4,
				'topic': 'anxiety'

			},

			{
				'title': 'winter blues',
				'question': "i hate earlier darker nights as winter approcahes . Does anyone else get pannicky ?",
				'author': 'nil',
				'views': function() {
					return function() {
						return ' ' + Teleportal.forum.randValue();
					};
				},
				'index': 5,
				'topic': 'anxiety'

			},


		]

	};


	function init() {
		container = $('.forum-questions');
		// setEvents();
	}

	function setEvents() {
		container.on('click', '.forum-link', function(e) {
			e.preventDefault();
			var link = $(this).data('forum');
			showForumList(link);
			console.log(link);
		});
	}

	function showForumList(topic) {
		Teleportal.getContext().renderEach(Teleportal.getTemplatesPath() + 'forum-list.ms', topics[topic])
			.appendTo($('.forum-questions')).then(function(){
			});
	}

 	function randValue() {
    	return (Math.floor(Math.random() * (1 + 50 - 20))) + 10;
    }

    function getViews() {
		return function() {
			return ' ' + Teleportal.forum.randValue();
		};
    }

    function getQuestion(topic, index) {
    	var q = topics[topic][index];
    	return q;
    	// console.log(q);
    }


	return {
		init: init,
		forumPartial: showForumList,
		randValue: randValue,
		getQuestion: getQuestion
	};

}();