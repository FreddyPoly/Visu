(function() {

	'use strict';

	$(document).ready(function() {
		var map = AmCharts.makeChart( "chartdiv", {

		"type": "map",
		"theme": "light",
		"projection": "miller",

		"dataProvider": {
		"map": "worldLow",
		"getAreasFromMap": true
		},
		"areasSettings": {
		"autoZoom": true,
		"selectedColor": "#CC0000"
		},
		"smallMap": {},
		"export": {
		"enabled": true,
		"position": "bottom-right"
		}
	});

})();