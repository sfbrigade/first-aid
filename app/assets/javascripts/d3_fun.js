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
      .on("click", clicked);

  var g = svg.append("g");

  // This is the map
  d3.json("/assets/us.json", function(error, us) {
    if (error) throw error;

    g.append("g")
        .attr("id", "states")
        .style('position', 'relative', 'z-index', '0')
      .selectAll("path")
        .data(topojson.feature(us, us.objects.states).features)
      .enter().append("path")
        .attr("d", path)
        .on("click", clicked);

    g.append("path")
        .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
        .attr("id", "state-borders")
        .attr("d", path);
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
        .classed("active", centered && function(d) { return d === centered; });

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
      // for(i = 0; i < response.length; i++){
      //   if(response[i].lat >= 25 && response[i].lon <= -65 && response[i].lat <= 50 && response[i].lon >= -125 || response[i].lon <= -140 && response[i].lon >= -166 && response[i].lat >= 56 && response[i].lat <= 72 || response[i].lon <= -154 && response[i].lon >= -161 && response[i].lat >= 18.8 && response[i].lat <= 22.5 ){

        // console.log(response)
            g.selectAll("circle")
               .data(response)
               .enter()
               .append("a")
               .attr("class", "disaster_link")
               .attr("xlink:href", function(d) {
                  // console.log(d)
                    return "/disasters/" + d.disasters_id;}
                )
               .append("circle")
               .attr("cx", function(d) {
                  var coords = projection([d.lon, d.lat]);
                  if(coords){
                  console.log(coords[0])
                    console.log("coord[0]:")
                    if(coords[0] > 235 && coords[0] < 951 && (coords[1] > 164) && (coords[1] < 555)){
                      return coords[0];
                    }
                  }
               })
               .attr("cy", function(d) {
                  var coords = projection([d.lon, d.lat]);
                    if(coords){
                  console.log(coords[1])
                    console.log("coord[1]:")
                      if(coords[0] > 235 && coords[0] < 951 && (coords[1] > 164) && (coords[1] < 555)){
                        return coords[1];
                      }
                    }
                })
               .attr("r", 5)
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
            }).style("position", "relative").style("z-index", "100")
               .on('mouseover', tip.show)
               .on('mouseout', tip.hide)
      });
  }

  setTimeout(cities, 1000);

  var tip = d3.tip()
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {

      return "<strong>Category:</strong> <span style='color:red'>" + d.category + "</span>";
    })
  svg.call(tip);
}

var getCoordinates = function(data){
  var lat = data.latitude
  var long = data.longitude

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: lat, lng: long},
    scrollwheel: false,
    zoom: 14
   });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: {lat: lat, lng: long},
    radius: 32000,
    type: ['food']
  }, callback);

  function callback(results, status) {
    console.log(results)
  }
}

