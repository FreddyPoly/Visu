(function() {
	'use strict';

	// Réajuste la taille de la map au viewport actuel
	function resize_map() {
		// Réajustement de la taille de la map à chaque changement de résolution
		var height = jQuery(window).height();
		var width = jQuery(window).width();

		var new_height = height * 100 / 648;
		var new_width = width * 135 / 1366;

		// Valeurs minimales
		if(new_height < 100)
			new_height = 125;

		if(new_width < 100)
			new_width = 125;

		$("#bigger_map").height(new_height+"%");
		$("#bigger_map").width(new_width+"%");

		//console.log("Height avec "+height+"px qui donne "+new_height);
		//console.log("Width avec "+width+"px qui donne "+new_width);
	}

	// A chaque changement de la taille du viewport on réajuste la taille de la map
	$(window).resize(function() {
		resize_map();
	});

	$(document).ready(function() {
		resize_map();

		// CSSMap;
		$("#map-europe").CSSMap({
			"size": 1450,
			"responsive": "auto",
			onClick: function(e) {
				resize_map();
				var rLink = e.children("A").eq(0).attr("href"),
				    rText = e.children("A").eq(0).text(),
				    rClass = e.attr("class").split(" ")[0];

				// Calcul 

				console.log(rText);
				console.log(e);
				console.log($(e).find("span"));
				console.log(e.offsetLeft);
				console.log($(e).position.left);

				// Faire une fonction pour remettre la map à sa place
			},
			"pins": {
			    "enable": true,
			    "pinsId": "#demo-markers",
			    "mapSize": 1450,
			    "tooltipOnClick": false,
			    "clickableRegions": true
			},
			"multipleClick": {
				enable: true,
				clicksLimit: 2
			}
		});
	});

})();