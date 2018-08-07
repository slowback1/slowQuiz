

import React, { Component } from 'react';
import PieChart from 'react-d3-basic';


var generalChartData = require('./dummyData.csv');
    var width = 700,
        height = 400,
        value = function(d) {
            return +d.number;
        },
        name = function(d) {
            return d.rightWrong
        },
        chartSeries = [
                {
                    "field": "right",
                    "name": "right"
                },
                {
                    "field": "wrong",
                    "name": "wrong"
                }
            ];
class Chart extends Component {
    
    render() {
        return (
                <div>

                </div>
            )
    }
}


export default Chart;