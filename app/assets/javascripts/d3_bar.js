
var dBarChart = function(){

    d3.select('#wrapper2 svg').remove();

    setTimeout(function() {

  var margin = {top: 40, right: 20, bottom: 70, left: 40},
      width = 250 - margin.left - margin.right,
      height = 250 - margin.top - margin.bottom;


  var formatPercent = d3.format(".0%");

  var x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1);

  var y = d3.scale.linear()
      .range([height, 0]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")

  var svg = d3.select("#wrapper2").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

 var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .style('z-index', '99999999')
    .html(function(d) {
      return "<strong>Category:</strong> <span style='color:red'>" + d.category + "</span> <br><strong>Frequency:</strong> <span style='color:red'>" + d.frequency+ "</span>";
      console.log("Tip")
    })

  svg.call(tip);

      $.ajax({type: "GET",
              url: "/users/currentsession",
              dataType: "json"}).done(function(response){
        $.ajax({
                type: "GET",
                url: "/users/" + response,
                dataType: "json"
              }).done(function(response) {
                var data = response[0].frequency


  data.forEach(function(d) {
    x.domain(data.map(function(d) { return d.category; }));
    y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

//to change text
        svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis)
        .selectAll("text")
          .attr("y", 0)
          .attr("x", 9)
          .attr("dy", ".35em")
          .attr("transform", "rotate(90)")
          .style("text-anchor", "start");

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", -40)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Frequency");


  svg.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("fill", "orange")
      .attr("y", height )
      .attr("height", 0)
      .transition().duration(750).ease("quad")
      .attr("x", function(d) { return x(d.category); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.frequency); })
      .attr("height", function(d) { return height - y(d.frequency)})

      svg.selectAll(".bar")
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)

  });


  function type(d) {
    d.frequency = +d.frequency;
    return d;
  }
  
  })//close ajax
})//close outer ajax

}, 1000);//
}


var dAllBarChart = function(){

    d3.select('#wrapper2 svg').remove();

    setTimeout(function() {

  var margin = {top: 40, right: 20, bottom: 70, left: 40},
      width = 250 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;


  var formatPercent = d3.format(".0%");

  var x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1);

  var y = d3.scale.linear()
      .range([height, 0]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")

  var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .style('z-index', '99999999')
    .html(function(d) {
      return "<strong>Category:</strong> <span style='color:red'>" + d.category + "</span> <br><strong>Frequency:</strong> <span style='color:red'>" + d.frequency+ "</span>";
    })

  var svg = d3.select("#wrapper2").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  svg.call(tip);

        $.ajax({
                type: "GET",
                url: "/all_donations",
                dataType: "json"
              }).done(function(response) {
                var data = response[0].frequency


  data.forEach(function(d) {
    x.domain(data.map(function(d) { return d.category; }));
    y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

       svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis)
        .selectAll("text")
        .remove() // this removes the label - the below adds them vertically 
          // .attr("y", 0)
          // .attr("x", 9)
          // .attr("dy", ".35em")
          // .attr("transform", "rotate(90)")
          // .style("text-anchor", "start");

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", -40)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Frequency");


  svg.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("fill", "orange")
      .attr("y", height )
      .attr("height", 0)
      .transition().duration(750).ease("quad")
      .attr("x", function(d) { return x(d.category); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.frequency); })
      .attr("height", function(d) { return height - y(d.frequency)})

      svg.selectAll(".bar").on('mouseover', tip.show)
      .on('mouseout', tip.hide)

      // svg.selectAll(".bar").call(axis).selectAll("text").remove();



  });


  function type(d) {
    d.frequency = +d.frequency;
    return d;
  }
  
  })//close ajax


}, 1000);//
}
