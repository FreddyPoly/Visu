var setHighchart;

$(function () {

    function inverse(num){
        return(num*-1);
    }

    setHighchart = function(country1, country2){
        window.chart1.series[0].setData((data_chart[country1].male).map(inverse));
        window.chart1.series[0].name = "Homme ("+country1+")";
        window.chart1.series[1].setData(data_chart[country1].female);
        window.chart1.series[1].name = "Femme ("+country1+")";

        if(country2 != null && country2 != '')
        {
            window.chart1.series[2].setData((data_chart[country2].male).map(inverse));
            window.chart1.series[3].setData(data_chart[country2].female);
            window.chart1.series[2].name = "Homme ("+country2+")";
            window.chart1.series[3].name = "Femme ("+country2+")";
            chart1.series[2].show();
            chart1.series[3].show();
        }
        else
        {
            chart1.series[2].hide();
            chart1.series[3].hide();
        }
    }

    // Age categories
    var categories = ['Soins à la famille' , 'Gestion de la nourriture', 'Vaisselle' , 'Ménage', 'Entretien de l\'habitat', 'Lessive/Repassage', 'Jardinage', 'handicraft', 'Faire les Courses' ];
    $(document).ready(function () {
        window.chart1 = Highcharts.chart('container', {
            chart: {
                type: 'bar'
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
                linkedTo:  0,
                labels: {
                    step: 1
                }
            }],
            yAxis: {
                title: {
                    text: 'Homme / Femme'
                },
                labels: {
                    formatter: function () {
                        return Math.abs(this.value) + 'h';
                    }
                }
            },

            plotOptions: {
                series: {
                    stacking: 'normal',
                    pointWidth: 15
                }
            },

            legend: {
                enabled: false
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + ', ' + this.point.category + '</b><br/>' +
                        'Temps: ' + Highcharts.numberFormat(Math.abs(this.point.y), 1)+ 'h';
                }
            },

            series: [{
                name: 'Homme',
                data: [-2,-2,-2,-2,-2,-2,-2,-2],
                stack : 'country1'
            }, {
                name: 'Femme',
                data: [2,2,2,2,2,2,2,2],
                stack : 'country1'
            },
            {
                name: 'Homme',
                data: [-2,-2,-2,-2,-2,-2,-2,-2],
                stack : 'country2'
            },
            {
                name: 'Femme',
                data: [2,2,2,2,2,2,2,2],
                stack : 'country2'
            }]
        });
        
        chart1.series[2].hide();
        chart1.series[3].hide();

    });

});
