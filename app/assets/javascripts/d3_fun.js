var dMap = function(){

  var width = 1170,
      height = 725,

      centered;

  var projection = d3.geo.albersUsa()
      .scale(1000)
      .translate([width / 2, height / 2]);

  var path = d3.geo.path()
      .projection(projection);

  var svg = d3.select(".map-body").append("svg")
      .attr("width", width)
      .attr("height", height);

  svg.append("rect")
      .attr("class", "background")
      .attr("width", width)
      .attr("height", height)
      .on("click", clicked)

  var g = svg.append("g");

  // This is the map
  d3.json("/assets/us.json", function(error, us) {
    if (error) throw error;

    g.append("g")
        .attr("id", "states")
        .style('position', 'relative', 'z-index', '0')
      .selectAll("path")
        .data(topojson.feature(us, us.objects.states).features)
// leave this space
      .enter().append("path")
        .attr("d", path)
        .on("click", clicked)
          .on("mouseover", function(){
          d3.select(this).style("fill", "orange")})
        .on("mouseout", function(){
          d3.select(this).style("fill", "#aaa")})


    g.append("path")
        .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
        .attr("id", "state-borders")
        .attr("d", path)
        .style("opacity",0).transition().duration(5000).style("opacity", 100)

  });

  function clicked(d) {
    var x, y, k;

    if (d && centered !== d) {
      var centroid = path.centroid(d);
      x = centroid[0];
      y = centroid[1];
      k = 4;
      centered = d;
    } else {
      x = width / 2;
      y = height / 2;
      k = 1;
      centered = null;
    }

    g.selectAll("path")
        .classed("active", centered && function(d) { return d === centered; })


    g.transition()
        .duration(750)
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
        .style("stroke-width", 1.5 / k + "px");
  }

  var cities = function(){
  // the cordinates csv is here
    $.ajax({
      type: "GET",
      url: "/disasters",
      dataType: "json"
    })
    .done(function(response) {
            g.selectAll("circle")
               .data(response)
               .enter()
               .append("a")
               .attr("class", "disaster_link")
               .attr("xlink:href", function(d) {
                    return "/disasters/" + d.disasters_id;}
                )
               .append("circle")
               .style("fill", function(d){
                // console.log(d)
              var today = new Date();
              var todays_date = today.toLocaleDateString()

              var oneWeekAgo = new Date();
              oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
              var last_weeks_date = oneWeekAgo.toLocaleDateString();

              var dateOfDisaster = new Date(d.date);
              var disaster_date = dateOfDisaster.toLocaleDateString();


              if(disaster_date === todays_date){
                return "red"
              }else if (disaster_date < todays_date && disaster_date > last_weeks_date){
                return "orange"
              }else{
                return "yellow"
              }
            })
               .attr("cx", function(d) {
                  var coords = projection([d.lon, d.lat]);
                  if(coords){
                      return coords[0];
                    }
               })
               .attr("cy", function(d) {
                  var coords = projection([d.lon, d.lat]);
                    if(coords){
                        return coords[1];
                      }
                })
               .attr("r",0)
               .transition()
               .duration(250)
               .attr("r", 7)
               .transition()
               .duration(250)
               .attr("r", 2)
               .transition()
               .duration(250)
               .attr("r", 5)
               .style("position", "relative").style("z-index", "100")
               .on('mouseover', tip.show)
               .on('mouseout', tip.hide)

      });
  }
  setTimeout(cities, 1500);


  var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {

      return "<strong>Category:</strong> <span style='color:red'>" + d.category + "</span>";
    })
  svg.call(tip);
}
