$(function () {
    Highcharts.chart('belgium_pie', {
        chart: {
            margin: [0, 0, 0, 0],
            spacingTop: 0,
            spacingBottom: 0,
            spacingLeft: 0,
            spacingRight: 0,
            backgroundColor:'rgba(255, 255, 255, 0.0)',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        tooltip: {
            enabled: false
        },
        exporting: { enabled: false },
        title: {
            text: null
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            pie: {
                size:'100%',
                showInLegend: false,
                dataLabels: {
                    enabled: false
                },
                size: 50 
            }
        },
        series: [{
            name: 'Part Homme/Femme (%)',
            colorByPoint: true,
            data: [{
                name: 'Homme',
                y: 56.33
            }, {
                name: 'Femme',
                y: 24.03,
            }]
        }]
    });

    $(window).trigger('resize');
});