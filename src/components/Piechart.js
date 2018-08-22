import React, { Component } from 'react';
import bardatas from '../json/bardata'; 
import AmCharts from '@amcharts/amcharts3-react';

class PieChart extends Component{
    componentDidMount(){
        var Pie = AmCharts.makeChart("piechart",{
            "type": "pie",
            "theme": "light",
            "dataProvider": bardatas,
            "valueField": "visits",
            "titleField": "country",
            "balloon":{
                "fixedPosition": true
            }

        });
    }
    render(){
        
        return(
            <div id="piechart"></div>
        )
    }
}
export default PieChart;