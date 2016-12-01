var Pie = function(country) {
    this.country = country;
    this.piechart = null;
};

Pie.prototype = {
    init : function() {
        

        var ancre = $("#"+this.country)[0];
        var pie_div = document.createElement("div");
        pie_div.setAttribute("id",this.country+"_pie");
        pie_div.setAttribute("class","css-pie");

        ancre.appendChild(pie_div);

        this.piechart = Highcharts.chart(this.country+'_pie', {
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
                                    y: 50
                                }, {
                                    name: 'F',
                                    y: 50,
                                }]
                            }]
                        });

        this.piechart.series[0].setData([75,25]);
    }

};


$(function () {
    var pie3 = new Pie("estonia");
    pie3.init();
    var pies = [];
    var pie;
    /*for(var i = 0; i < Object.keys(data_chart).length; i++)
    {
        pie = new Pie(data_chart.)
    }*/

    for(var key in data_chart)
    {
        console.log(data_chart[key]);
    }

    $(window).trigger('resize');
});