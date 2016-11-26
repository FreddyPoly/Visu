(function() {
	'use strict';

	$(document).ready(function() {
		// CSSMap;
		$("#map-europe").CSSMap({
		  "size": 430
		});

		$(".eu13").find("a").each(function() {
			$(this).click(function() {
				console.log("France");
			});
		});
	});

})();