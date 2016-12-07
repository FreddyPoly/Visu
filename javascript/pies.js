var changeColorPie;

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
                                    events: {
                                        mouseOver: function() {
                                                /*console.log(this.group);
                                                this.markerGroup.toFront();*/
                                            }
                                    },
                                    point: {
                                        events: {
                                            click: function(e){
                                                if(e.path[4].tagName == "DIV")
                                                {
                                                    console.log(e.path[4].offsetParent.id);
                                                    trigger_clic_pays(e.path[4].offsetParent.id);    
                                                }
                                                else if(e.path[4].tagName == "svg"){
                                                    console.log(e.path[5].offsetParent.id);
                                                    trigger_clic_pays(e.path[5].offsetParent.id);   
                                                }
                                            },
                                            mouseOver: function() {
                                                /*console.log(this.series);
                                                this.group.toFront();*/
                                            }
                                        }
                                    },
                                }
                            },
                            series: [{
                                name: 'Part Homme/Femme (%)',
                                colorByPoint: true,
                                data: [{
                                    name: 'H',
                                    y: 50,
                                    color: Highcharts.getOptions().colors[0]
                                }, {
                                    name: 'F',
                                    y: 50,
                                    color: Highcharts.getOptions().colors[1]
                                }]
                            }]
                        });

    }

};

var pies = [];

$(function () {

    changeColorPie = function(country) {
        for(var i = 0; i < pies.length; i++)
        {
            //console.log(pies[i].country);
            if(pies[i].country == country) { // change color
                pies[i].piechart.series[0].options.data[0].color = Highcharts.getOptions().colors[2];
                pies[i].piechart.series[0].options.data[1].color = Highcharts.getOptions().colors[3];
                pies[i].piechart.series[0].update(pies[i].piechart.series[0].options.data[0]);
                pies[i].piechart.series[0].update(pies[i].piechart.series[0].options.data[1]);  
            }
            else { // reset color
                if((pies[i].piechart.series[0].options.data[0].color != Highcharts.getOptions().colors[0]) && (pies[i].piechart.series[0].options.data[1].color != Highcharts.getOptions().colors[1])) {
                    pies[i].piechart.series[0].options.data[0].color = Highcharts.getOptions().colors[0];
                    pies[i].piechart.series[0].options.data[1].color = Highcharts.getOptions().colors[1];
                    pies[i].piechart.series[0].update(pies[i].piechart.series[0].options.data[0]);
                    pies[i].piechart.series[0].update(pies[i].piechart.series[0].options.data[1]);
                }
            }
        }
    }

    
    var pie;
    var sum_male, sum_female;
    var percent_male, percent_female;

    for(var key in data_chart)
    {
        pie = new Pie(data_chart[key].country_en);
        pie.init();
        sum_male = data_chart[key].male.reduce(function(pv, cv) { return pv + cv; }, 0);
        sum_female = data_chart[key].female.reduce(function(pv, cv) { return pv + cv; }, 0);
        percent_male = sum_male / (sum_male + sum_female);
        percent_female = sum_female / (sum_male + sum_female);
        pie.piechart.series[0].setData([sum_male,sum_female]);

        pies.push(pie);
    }

    console.log(pies[0].piechart.series[0].options.data[0]);
    
    changeColorPie("france");

    $(window).trigger('resize');
});