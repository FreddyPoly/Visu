(function() {
	'use strict';

	$(document).ready(function() {
		// CSSMap;
		$("#map-europe").CSSMap({
		  "size": 430
		});

		$(".eu13").find("span").each(function() {
			console.log($(this));
			$(this).find("span").each(function() {
				console.log("2eme span "+$(this));
				console.log($(this));
				$(this).click(function() {
					console.log("France");
				});
			});
		});
	});

})();