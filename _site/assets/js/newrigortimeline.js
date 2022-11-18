// Initialize dataset
var dataset = [];

// Import JSON
d3.json("/assets/data/newrigortimeline_data.json", function(data) {

// Width and height
var margin = {top: 20, right: 20, bottom: 30, left: 20};
var width = 1200 - margin.left - margin.right;
var height = 400 - margin.top - margin.bottom;

// Data
dataset = data;

// Create SVG
var svg = d3.select("#timelinecanvas")
   .append("div")
   .classed("svg-container", true) //container class to make it responsive
   .append("svg")
   //responsive SVG needs these 2 attributes and no width and height attr
   .attr("preserveAspectRatio", "xMinYMin meet")
   .attr("viewBox", "0 0 1200 400")
   //class to make it responsive
   .classed("svg-content-responsive", true); 

// Domain and range
var x = d3.time.scale()
.domain([new Date("Sat May 02 16:48:00 +0000 2015"), new Date("Sat May 02 17:32:00 +0000 2015")])
.range([0, width]);

var y = d3.scale.ordinal()
.domain(["null", "red", "green", "blue", "orange", "purple", "none"])
.rangeBands([0, height]);

// Create axes
var xAxis = d3.svg.axis()
    .scale(x)
    .orient('bottom')
    .ticks(d3.time.minute, 5)
    .tickFormat(d3.time.format('%I:%M'))
    .tickSize(0)
    .tickPadding(8);

var yAxis = d3.svg.axis()
    .scale(y)
    .orient('left')
    .tickPadding(8);

// Color function
// Assign colors to groups
var colors = function(dataset){
  if (dataset.hashtags === "none") {
    return "#949494";
  } else if (dataset.hashtags === "red") {
    return "#ff0000";
  } else if (dataset.hashtags === "blue") {
    return "#00A6FF";
  } else if (dataset.hashtags === "orange") {
    return "#FFA200";
  } else if (dataset.hashtags === "purple") {
    return "#BB00FF";
  } else if (dataset.hashtags === "green") {
    return "#00B539";
  } else {
    return "#000000";
  }
}; 

// Declare tooltip
var div = d3.select("body").append("div")   
            .attr("class", "tooltip")               
            .style("opacity", 0);

// Create circles
var circle = svg.selectAll("circle")
    .data(dataset)
    .enter()
  	.append("circle")
  	.attr("cx", function(d) { return x(new Date(d.created_at)) + 60; })
  	.attr("cy", function(d) {
    	return y(d.hashtags);
  	})
  	.attr("r", 10)
  	.style("fill", colors);

// Update label box and highlighting
svg.selectAll("circle")
	.on("mouseover", function(d) {
    	div.transition()
           .duration(200)      
           .style("opacity", 0.85);
      	div.html("<em>" + d.user_name + " / " + d.user_screen_name+ "</em>" + "<br/>" + d.text)
           .style("left", (d3.event.pageX) + "px")     
           .style("top", (d3.event.pageY - 28) + "px");
   	})
   	.on("mouseout", function(d) {
      	div.transition()        
      	   .duration(1000)      
      	   .style("opacity", 0);
   	});

  	// Create X Axis
 	svg.append("g")
       .attr("class", "axis")
       .attr("transform", "translate(0," + (height) + ")")
       .call(xAxis);
});