(function() {
	'use strict';

	$(document).ready(function() {
		// CSSMap;
		$("#map-europe").CSSMap({
			"size": 1450,
			"responsive": "auto",
			onClick: function(e) {
				var rLink = e.children("A").eq(0).attr("href"),
				    rText = e.children("A").eq(0).text(),
				    rClass = e.attr("class").split(" ")[0];

				// Calcul 

				console.log(rText);
				console.log(e);
				console.log($(e).find("span"));
				console.log(e.offsetLeft);
				console.log($(e).position.left);
			},
			"pins": {
			    "enable": true,
			    "pinsId": "#demo-markers",
			    "mapSize": 1450,
			    "markerPosition": "middle",
			    "tooltipPosition": "top",
			    "tooltipOnClick": false,
			    "clickableRegions": true
			}
		});
	});

})();