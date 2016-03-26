



        // Get the CSV and create the chart

        $(document).ready(function(){
          $.getJSON('https://www.highcharts.com/samples/data/jsonp.php?filename=analytics.csv&callback=?', function (csv) {
            console.log(csv);
                var chart = new Highcharts.Chart({
                  chart : {
                    type : 'line',
                    renderTo : 'morris-area-chart'

                  },
                  data: {

                      csv: csv
                  },

                  title: {
                      text: 'Temperature Graph'
                  },

                  subtitle: {
                      text: 'Data from Real Time Sensors Connected to Arduino'
                  },

                  xAxis: {
                      tickInterval:1000, // one week
                      tickWidth: 0,
                      gridLineWidth: 1,
                      labels: {
                          align: 'left',
                          x: 3,
                          y: -3
                      }
                  },

                  yAxis: [{ // left y axis
                      title: {
                          text: null
                      },
                      labels: {
                          align: 'left',
                          x: 3,
                          y: 16,
                          format: '{value:.,0f}'
                      },
                      showFirstLabel: false
                  }, { // right y axis
                      linkedTo: 0,
                      gridLineWidth: 0,
                      opposite: true,
                      title: {
                          text: null
                      },
                      labels: {
                          align: 'right',
                          x: -3,
                          y: 16,
                          format: '{value:.,0f}'
                      },
                      showFirstLabel: false
                  }],

                  legend: {
                      align: 'left',
                      verticalAlign: 'top',
                      y: 20,
                      floating: true,
                      borderWidth: 0
                  },

                  tooltip: {
                      shared: true,
                      crosshairs: true
                  },

                  plotOptions: {
                      series: {
                          cursor: 'pointer',
                          point: {
                              events: {
                                  click: function (e) {
                                      hs.htmlExpand(null, {
                                          pageOrigin: {
                                              x: e.pageX || e.clientX,
                                              y: e.pageY || e.clientY
                                          },
                                          headingText: this.series.name,
                                          maincontentText: Highcharts.dateFormat('%A, %b %e, %Y', this.x) + ':<br/> ' +
                                              this.y + ' visits',
                                          width: 200
                                      });
                                  }
                              }
                          },
                          marker: {
                              lineWidth: 1
                          }
                      }
                  },

                  series: [{
                      name: 'Expected Values',
                      lineWidth: 4,
                      marker: {
                          radius: 4
                      }
                  }, {
                      name: 'Actual Values'
                  }]
              });
          });
        });
