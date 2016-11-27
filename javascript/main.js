(function() {
	'use strict';

	$(document).ready(function() {
		// CSSMap;
		$("#map-europe").CSSMap({
			"size": 750,
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
			    "mapSize": 750,
			    "markerPosition": "middle",
			    "tooltipPosition": "top",
			    "tooltipOnClick": false,
			    "clickableRegions": true
			}
		});

		AmCharts.makeChart( "mapdiv", {
		  /**
		   * this tells amCharts it's a map
		   */
		  "type": "map",

		  /**
		   * create data provider object
		   * map property is usually the same as the name of the map file.
		   * getAreasFromMap indicates that amMap should read all the areas available
		   * in the map data and treat them as they are included in your data provider.
		   * in case you don't set it to true, all the areas except listed in data
		   * provider will be treated as unlisted.
		   */
		  "dataProvider": {
		    "map": "europe",
		    "getAreasFromMap": true
		  },

		  /**
		   * create areas settings
		   * autoZoom set to true means that the map will zoom-in when clicked on the area
		   * selectedColor indicates color of the clicked area.
		   */
		  "areasSettings": {
		    "autoZoom": true,
		    "selectedColor": "#CC0000"
		  },

		  /**
		   * let's say we want a small map to be displayed, so let's create it
		   */
		  "smallMap": {}
		} );
	});

})();