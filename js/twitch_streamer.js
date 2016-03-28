$(function () {
	// twitch streamers module
	var TwitchStreamer = (function () {
		// hold DOM elements
		var $streamersContainer;

		// array holds array of streamers to follow
		var streamers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff", 'comster404'];


		// module for handle streamers info
		var StreamersInfo = (function () {
			//source for template
			var srcTmpl = $('#streamer-info-item').html();
			//compile template
			var streamerTmpl = Handlebars.compile(srcTmpl);
			// logo url placeholder 
			var logoUrlPlaceholder = "https://pingendo.github.io/pingendo-bootstrap/assets/user_placeholder.png";

			// get info about streamers
			function getStreamerData(streamerName) {
				// reset context tmpl obj
				var url = 'https://api.twitch.tv/kraken/streams/' + streamerName + '?callback=?';
				var context;
	
				$.getJSON(url, function (data) {
					console.log(data);
					

					//if is online
					if (data.stream) {
						var info = data.stream.channel;
						// set data for template
						context = {
							logoUrl: info.logo || logoUrlPlaceholder,
							channelUrl: info.url,
							streamerName: info.display_name,
							status: info.status
						}
						// render data
						$streamersContainer.append(streamerTmpl(context));
					} else if (data.status >= 400) {
						// if user doesnt exist
						context = {
							logoUrl: logoUrlPlaceholder,
							channelUrl: '',
							streamerName: streamerName,
							status: "User doesn't exist"
						}
						// render data
						$streamersContainer.append(streamerTmpl(context));
					} else {
						// if is offline
						var url = 'https://api.twitch.tv/kraken/channels/' + streamerName + '?callback=?';

						$.getJSON(url, function (data) {
							console.log(data);
							context = {
								logoUrl: data.logo || logoUrlPlaceholder,
								channelUrl: data.url,
								streamerName: data.display_name,
								status: 'Offline'
							}
							// render data
							$streamersContainer.append(streamerTmpl(context));
						});				
					}	
				});
			}

			// update dom and display streamer info
			function displayStreamersData() {
				var output = '';

				// foreach streamer get info from api
				streamers.forEach(function (streamerName) {
					getStreamerData(streamerName);
				});
			}

			return {
				displayStreamersData: displayStreamersData
			}
		})();

		// cache DOM
		function cacheDOM() {
			$streamersContainer = $('#streamers-container');
		}

		// bind events
		function bindEvents() {
			// body...
		}

		function init() {
			cacheDOM();
			StreamersInfo.displayStreamersData();
			bindEvents();
		}

		init();
	})();
});