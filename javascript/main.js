(function() {
	'use strict';

	var maps_selected = [];

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

	// Met à jour la partie données de la dataviz
	function update_data() {
		// Si aucun pays n'est sélectionné ou que plus de 2 pays sont sélectionnés, on ne fait rien
		if(maps_selected.length <= 0 || maps_selected.length > 2)
			return;

		// Si au moins 1 pays est sélectionné, on met à jour les données
		if(maps_selected.length == 1)
			setHighchart(maps_selected[0], null);

		if(maps_selected.length == 2)
			setHighchart(maps_selected[0], maps_selected[1]);
	}

	// A chaque changement de la taille du viewport on réajuste la taille de la map
	$(window).resize(function() {
		resize_map();
	});

	// Fonction d'animation du bouton d'explications
	function animation_btn_explications() {
		for(var i = 0; i < 0; i++) {
			$("#container_explanations").transition({
						top: '93%',
						delay: 300 }, 1500, 'linear');
			$("#container_explanations").transition({
						top: '90%',
						delay: 300 }, 1500, 'linear');
		}
	}

	$(document).ready(function() {
		resize_map();

		// Event bouton +
		$("#btn_explications").click(function() {
			var clicks = $(this).data('clicks');
			if (clicks) {
				console.log("Pair");
				$("#container_explanations").transition({
					top: '90%',
				});
			} else {
				console.log("Impair");
				$("#container_explanations").transition({
					top: '30%',
				});
			}
			$(this).data("clicks", !clicks);
		});

		// CSSMap;
		$("#map-europe").CSSMap({
			"size": 1450,
			"responsive": "auto",
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
			},
			onClick: function(e) {
				var rText = e.children("A").eq(0).text();
				//console.log("Ajout "+rText);

				// Ajout du pays dans le tableau des pays sélectionnés
				maps_selected.push(rText);
				//console.log("Etat "+maps_selected);

				// Mise à jour des données
				update_data();
			},
			onSecondClick: function(e) {
				var rText = e.children("A").eq(0).text();
				//console.log("Suppression "+rText);

				// Suppression du pays dans le tableau
				var index = maps_selected.indexOf(rText);
				if (index > -1) {
				    maps_selected.splice(index, 1);
				}
				//console.log("Etat "+maps_selected);

				// Mise à jour des données
				update_data();
			}
		});

		animation_btn_explications();
	});

})();