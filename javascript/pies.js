$(function () {
    var pie1 = Highcharts.chart('belgium_pie', {
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

                    enabled: true,
                    distance: -10,
                    style: {
                        color: 'white'
                    }
                },
            },
            series: {
                point: {
                    events: {
                        click: function () {
                            alert('lililolilil');
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Part Homme/Femme (%)',
            colorByPoint: true,
            data: [{
                name: 'H',
                y: 56.33
            }, {
                name: 'F',
                y: 24.03,
            }]
        }]
    });

    var pie2 = Highcharts.chart('bulgaria_pie', {
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

                    enabled: true,
                    distance: -10,
                    style: {
                        color: 'white'
                    }
                },
            },
            series: {
                point: {
                    events: {
                        click: function () {
                            alert('lililolilil');
                        }
                    }
                }
            }
        },
        series: [{
            name: 'Part Homme/Femme (%)',
            colorByPoint: true,
            data: [{
                name: 'H',
                y: 56.33
            }, {
                name: 'F',
                y: 24.03,
            }]
        }]
    });

    $(window).trigger('resize');
});