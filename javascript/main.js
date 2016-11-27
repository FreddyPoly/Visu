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

				console.log(rText);
			}
		});
	});

})();