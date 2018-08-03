import React, { Component } from 'react';

class Chart extends Component {
    render() {
        return (
                <svg width="960" height="500"></svg>
            )
    }
}
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height"),
    radius = Math.min(width, height) / 2,
    g = svg.append("g").attr("transform", "translate(" + width/2 + "," + height/2 = ")");
    
var color = d3.scaleOrdinal(["blue", "red"]);

var pie = d3.pie()
    .outerRadius(radius - 10)
    .innerRadius(0);
    
var label = d3.arc()
    .outerRadius(radius - 40)
    .innerRadius(radius - 40)

//to do later
d3.csv("dummyData.csv", function(d) {
    d.number = +d.number;
    return d;
}, function(error, data) {
    if(error) throw error;
    var arc = g.selectAll(".arc")
        .data(pie(data))
        .enter().append("g")
            .attr("class", "arc")
            
    arc.append("path")
        .attr("d", path)
        .attr("fill", function(d) { return color(d.data.rightWrong); });
        
    arc.append("text")
        .attr("transform", function(d) { return "translate(" + label.centroid(d) + ")"; })
        .attr("dy", "0.35em")
        .text(function(d) { return d.data.rightWrong; });
});

export default Chart;