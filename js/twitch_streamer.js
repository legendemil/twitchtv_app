$(function () {
	// twitch streamers module
	var TwitchStreamer = (function () {
		// hold DOM elements
		var $streamersContainer;

		// array holds array of streamers to follow
		var streamers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];


		// module for handle streamers info
		var StreamersInfo = (function () {
			//source for template
			var srcTmpl = $('#treamer-info-item');
			//compile template
			var streamerTmpl = Handlebars.compile(srcTmpl);

			// get info about streamers
			function getStreamerData(streamerName) {
				var url = 'https://api.twitch.tv/kraken/streams/' + streamerName + '?callback=?';
				//var url = 'https://api.twitch.tv/kraken/channels/' + streamerName + '?callback=?';
	
				$.getJSON(url, function (data) {
					console.log(data);
				});
			}

			// update dom and display streamer info
			function displayStreamersData() {
				
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