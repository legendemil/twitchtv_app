$(function () {
	// twitch streamers module
	var TwitchStreamer = (function () {
		// hold DOM elements


		// array holds array of streamers to follow
		var streamers = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];

		//cache dom
		// bind events
		// get data fro mtwitch api
			// generte list of streamer info

		// module for handle streamers info
		var StreamersInfo = (function () {

			// get info about streamers
			function getStreamerData(streamerName) {
				var url = 'https://api.twitch.tv/kraken/streams/' + streamerName + '?callback=?';
				//var url = 'https://api.twitch.tv/kraken/channels/' + streamerName + '?callback=?';
	
				$.getJSON(url, function (data) {
					console.log(data);
				});
			}

			return {
				getStreamerData: getStreamerData
			}
		})();

		// cache DOM
		function cacheDOM() {
			// body...
		}

		// bind events
		function bindEvents() {
			// body...
		}

		function init() {
			cacheDOM();
			StreamersInfo.getStreamerData('TR7K');
			StreamersInfo.getStreamerData('freecodecamp');
			bindEvents();
		}

		init();
	})();
});