$(function () {
    Highcharts.chart('france', {
        chart: {
            backgroundColor:'rgba(255, 255, 255, 0.0)',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        exporting: { enabled: false },
        title: {
            text: null
        },
        plotOptions: {
            pie: {

               showInLegend: false,
                dataLabels: {
                    enabled: false
                },
                size: 100 
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
});