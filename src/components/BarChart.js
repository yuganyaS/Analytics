import React, { Component } from 'react';
var AmCharts = require("@amcharts/amcharts3-react");
import Bardata from '../json/bardata';

class BarChart extends Component{
    
    render(){
        var chart = AmCharts.makeChart("chartdiv", {
            "type": "serial",
            "theme": "light",
            "dataProvider": Bardata,
            "graphs": [{
              "fillAlphas": 0.9,
              "lineAlpha": 0.2,
              "type": "column",
              "valueField": "visits"
            }],
            "categoryField": "country",
            "chartCursor": {
              "fullWidth": true,
              "cursorAlpha": 0.1,
              "listeners": [{
                "event": "changed",
                "method": function(ev) {
                  // Log last cursor position
                  ev.chart.lastCursorPosition = ev.index;
                }
              }]
            },
            "listeners": [{
              "event": "init",
              "method": function(ev) {
                // Set a jQuery click event on chart area
                jQuery(ev.chart.chartDiv).on("click", function(e) {
                  // Check if last cursor position is present
                  if (!isNaN(ev.chart.lastCursorPosition)) {
                    console.log("clicked on " + ev.chart.dataProvider[ev.chart.lastCursorPosition].country);
                  }
                })
              }
            }]
          });
        return(
            <div id="barchart"></div>
        )
    }
}
export default BarChart;