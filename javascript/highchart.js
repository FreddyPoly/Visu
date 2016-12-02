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

            var sum_male = data_chart[country1].male.reduce(function(pv, cv) { return pv + cv; }, 0);
            var sum_female = data_chart[country1].female.reduce(function(pv, cv) { return pv + cv; }, 0);
            var percent_male = sum_male / (sum_male + sum_female);
            var percent_female = sum_female / (sum_male + sum_female);
            window.pie1_data.series[0].setData([sum_male,sum_female]);

            window.pie1_data.setTitle({text:country1});

            document.getElementById("th_pie2").className = "pie_data";

            sum_male = data_chart[country2].male.reduce(function(pv, cv) { return pv + cv; }, 0);
            sum_female = data_chart[country2].female.reduce(function(pv, cv) { return pv + cv; }, 0);
            percent_male = sum_male / (sum_male + sum_female);
            percent_female = sum_female / (sum_male + sum_female);
            window.pie2_data.series[0].setData([sum_male,sum_female]);

            window.pie2_data.setTitle({text:country2});
        }
        else
        {
            var sum_male = data_chart[country1].male.reduce(function(pv, cv) { return pv + cv; }, 0);
            var sum_female = data_chart[country1].female.reduce(function(pv, cv) { return pv + cv; }, 0);
            var percent_male = sum_male / (sum_male + sum_female);
            var percent_female = sum_female / (sum_male + sum_female);
            window.pie1_data.series[0].setData([sum_male,sum_female]);

            window.pie1_data.setTitle({text:country1});

            document.getElementById("th_pie2").className = "display_none";

            chart1.series[2].hide();
            chart1.series[3].hide();
        }
    }

    // Age categories
    var categories = ['Soins à la famille' , 'Gestion de la nourriture', 'Vaisselle' , 'Ménage', 'Entretien de l\'habitat', 'Lessive/Repassage', 'Jardinage', 'Faire les Courses' ];
    $(document).ready(function () {
        window.chart1 = Highcharts.chart('container', {
            chart: {
                type: 'bar'
            },
            exporting: { enabled: false },
            title: {
                text: null
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

        window.pie1_data = Highcharts.chart("pie1", {
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
                pointFormat: '{series.name}: <b>{point.percentage:1.0f}%</b><b> ({point.y:.1f}h)</b>'
            },
            exporting: { enabled: false },
            title: {
                text: 'null'
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    size:'80%',
                    showInLegend: false,
                    dataLabels: {

                        enabled: true,
                        distance: -35,
                        style: {
                            color: 'white'
                        }
                    },
                },
            },
            series: [{
                name: 'Répartition H/F',
                colorByPoint: true,
                data: [{
                    name: 'Homme',
                    y: 50
                }, {
                    name: 'Femme',
                    y: 50,
                }]
            }]
        });

        window.pie2_data = Highcharts.chart("pie2", {
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
                pointFormat: '{series.name}: <b>{point.percentage:1.0f}%</b><b> ({point.y:.1f}h)</b>'
            },
            exporting: { enabled: false },
            title: {
                text: 'null'
            },
            credits: {
                enabled: false
            },
            plotOptions: {
                pie: {
                    size:'80%',
                    showInLegend: false,
                    dataLabels: {

                        enabled: true,
                        distance: -35,
                        style: {
                            color: 'white'
                        }
                    },
                },
            },
            series: [{
                name: 'Répartition H/F',
                colorByPoint: true,
                data: [{
                    name: 'Homme',
                    y: 50,
                    color: Highcharts.getOptions().colors[2]
                }, {
                    name: 'Femme',
                    y: 50,
                    color: Highcharts.getOptions().colors[3]
                }]
            }]
        });


    });

});
