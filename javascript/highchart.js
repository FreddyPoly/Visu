
var lol = 1;

$(function () {

    function inverse(num){
        return(num*-1);
    }

    // Age categories
    var categories = ['Ménage' , 'Jardinage', 'Vaisselle' , 'passage de balais'];
    $(document).ready(function () {
        window.chart1 = Highcharts.chart('container', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Répartition H/F des tâches ménagères'
            },
            subtitle: {
                text: 'Source: <a href="http://masource.com">masource</a>'
            },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, { // mirror axis on right side
                opposite: true,
                reversed: false,
                categories: categories,
                linkedTo: 0,
                labels: {
                    step: 1
                }
            }],
            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return Math.abs(this.value) + 'h';
                    }
                }
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + ', age ' + this.point.category + '</b><br/>' +
                        'Population: ' + Highcharts.numberFormat(Math.abs(this.point.y), 1);
                }
            },

            series: [{
                name: 'Homme',
                data: [-2.2, -2.2, -2.3, -2.5]
            }, {
                name: 'Femme',
                data: [2.1, 2.0, 2.2, 2.4]
            }]
        });

    //chart1.series[0].setData([-2.2, -2.2, -2.3, -5]);
    chart1.series[0].setData((data_chart['france'].male).map(inverse));
    console.log(data_chart);

    });

});