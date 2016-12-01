(function() {
	'use strict';

	var maps_selected = [];

	// Fonction réajustant la taille de la map au viewport actuel
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
	}

	// Fonction mettant à jour la partie données de la dataviz
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

	// Fonction d'animation du bouton d'explications
	function animation_btn_explications() {
		for(var i = 0; i < 5; i++) {
			$("#container_explanations").transition({
						top: '93%',
						delay: 400 }, 1000, 'linear');
			$("#container_explanations").transition({
						top: '90%',
						delay: 400 }, 1000, 'linear');
		}
	}

	// A chaque changement de la taille du viewport on réajuste la taille de la map
	$(window).resize(function() {
		resize_map();
	});

	// Fonction se lançant au chargement de la page
	$(document).ready(function() {
		resize_map();

		// Event bouton explications
		$("#btn_explications").click(function() {
			// Arret de l'animation du bouton
			$("#container_explanations").stop(true, true);
			var clicks = $(this).data('clicks');
			if (clicks) {
				$("#container_explanations").transition({
					top: '90%',
				}, 800, 'easeInBack');
				animation_btn_explications();
			} else {
				$("#container_explanations").transition({
					top: '7%',
				}, 1200, 'easeOutBack');
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

				// Ajout du pays dans le tableau des pays sélectionnés
				maps_selected.push(rText);

				// Mise à jour des données
				update_data();
			},
			onSecondClick: function(e) {
				var rText = e.children("A").eq(0).text();

				// Suppression du pays dans le tableau
				var index = maps_selected.indexOf(rText);
				if (index > -1) {
				    maps_selected.splice(index, 1);
				}

				// Mise à jour des données
				update_data();
			}
		});

		animation_btn_explications();
	});

})();