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
        .on("click", clicked)
          .on("mouseover", function(){
          d3.select(this).style("fill", "orange")})
        .on("mouseout", function(){
          d3.select(this).style("fill", "#aaa")})
        

    g.append("path")
        .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
        .attr("id", "state-borders")
        .attr("d", path)

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
           .attr("cx", function(d) {
<<<<<<< HEAD
                  

                   return projection([d.lon, d.lat])[0];
           })
           .attr("cy", function(d) {
            console.log(d.lat)
                   return projection([d.lon, d.lat])[1];
=======
              var coords = projection([d.lon, d.lat]);
              if (coords) {
                   return coords[0];
              }
           })
           .attr("cy", function(d) {
                   var coords = projection([d.lon, d.lat]);
              if (coords) {
                   return coords[1];
              }
>>>>>>> master
           })
           .attr("r", 5)
           .style("fill", function(d){

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

      // var map = new google.maps.Map(document.getElementById('map'), {
      //   center: {lat: lat, lng: long},
      //   scrollwheel: false,
      //   zoom: 14
      //  });

      infowindow = new google.maps.InfoWindow();
      var service = new google.maps.places.PlacesService();
      service.nearbySearch({
        location: {lat: lat, lng: long},
        radius: 32000,
        type: ['food']
      }, callback);

        // var marker = new google.maps.Marker({
        // position: {lat: lat, lng: long},
        // map: map
      // })

      function callback(results, status) {
        console.log(results)
      }
      // function createMarker(place) {
      //   var placeLoc = place.geometry.location;
      //   var marker = new google.maps.Marker({
      //     map: map,
      //     position:placeLoc
      //   });

      //   google.maps.event.addListener(marker, 'click', function() {
      //     infowindow.setContent(place.name);
      //     infowindow.open(map, this);
      //   });
       // }

      // .fail(function(data){
      //   console.log(data)
      // })
  }

  var dPieChart = function(){
  
  var canvas = d3.select('#wrapper')
              .append('svg')
              .attr({'width':650,'height':500});
         $.ajax({type: "GET",
              url: "/users/currentsession",
              dataType: "json"}).done(function(response){
         $.ajax({
                type: "GET",
                url: "/users/" + response,
                dataType: "json"
              }).done(function(response) {
                var data = response[0].amount
                var total_amount = response[0].total_amount
        // console.log(data)
           

      // var amount = [{"category":"Flood", "value":40}, 
      //         {"label":"Hurricane", "value":30}, 
      //         {"label":"Earthquake", "value":20},
      //         {"label":"Fire", "value":15},
      //         {"label":"Disease", "value":10}];

              var colors = ['#c8e5e8','#282efa', '#505cf6', '#a0b7ed', '#7889f1'];

              var colorscale = d3.scale.linear().domain([0,data.length]).range(colors);

        pi = 3.141592653589793238462643383279502884197169;

      var width = 700,
        height = 500,
        radius = Math.min(width, height) / 2;

      var pie = d3.layout.pie()
        .value(function(d) {
          return d.value;
        })
        .startAngle(-180 * (pi / 180))
        .endAngle(180 * (pi / 180));

          var arc = d3.svg.arc()
        .innerRadius(radius - 150)
        .outerRadius(radius - 20);

      var arcOver = d3.svg.arc()
        .innerRadius((radius - 150) + 10)
        .outerRadius((radius - 20) + 10);


      var renderarcs = canvas.append('g')
              .attr('transform','translate(300,250)')
              .selectAll('.arc')
              .data(pie(data))
              .enter().append("g")
              .attr('class',"arc");

               
      renderarcs.append("text")
                  .attr("dy", ".05em")
                  .attr("text-anchor", "middle")
                  .text( "")
                  .attr("id", "value")
                  .attr("class", "text-tooltip")        
                      .style("text-anchor", "middle")
                      .style("font-family", "Arial" )
                      .attr("font-weight", "bold")
                      .style("font-size", radius/6 +"px");

      renderarcs.append("text")
                  .attr("dy", "1.00em")
                  .attr("text-anchor", "middle")
                  .text( "")
                  .attr("id", "category")
                  .attr("class", "text-tooltip")        
                      .style("text-anchor", "middle" )
                      .style("font-family", "Arial" )
                      .attr("font-weight", "bold")
                      .style("font-size", radius/8 +"px");
      
      

      d3.select("#category").text("Total").style('fill', 'orange')


      function changeValue(i){
        if (i < total_amount +1){
        d3.select("#value").text("$" + i).style('fill', 'orange')
        setTimeout(function(){
            changeValue(i += parseInt(total_amount/100) ) //total_amount/100
        }, 0.5);}
      }

      changeValue(0);
      d3.select("#value").text("$" + total_amount).style('fill', 'orange')


      renderarcs.append('path')
          .attr('fill',function(d,i){ return colorscale(i); })

          .on("mouseover", function(d) {
                    d3.select(this).transition()
                       .duration(200)
                       .attr("d", arcOver);

                    d3.select("#value").text('$' + d.value).style('fill', $(this).attr('fill'))
                    console.log(d.data)
                    d3.select("#category").text(d.data.category).style('fill', $(this).attr('fill'))
                   })


          .on("mouseout", function(d) {
                    d3.select(this).transition()
                       .duration(200)
                       .attr("d", arc);
                    d3.select("#value").text('$' + total_amount).style('fill', 'orange')
                    d3.select("#category").text("Total").style('fill', 'orange')

                   })
          .transition().delay(function(d, i) { return i * 200; }).duration(200)
            .attrTween('d', function(d) {
                 var i = d3.interpolate(d.startAngle+0.1, d.endAngle);
                 return function(t) {
                     d.endAngle = i(t);
                   return arc(d);
                   
                 }
             })
            })
  })
}

var dBarChart = function(){
  var margin = {top: 40, right: 20, bottom: 30, left: 40},
      width = 960 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

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
    .html(function(d) {
      return "<strong>Frequency:</strong> <span style='color:red'>" + d.frequency + "</span>";
    })

  var svg = d3.select("#wrapper2").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

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

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
      .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Frequency");

  svg.selectAll(".bar")
      .data(data)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide)
      .attr("fill", "orange")
      .attr("y", 430)
      .attr("height", 0)
      .transition().duration(750).ease("quad")
      .attr("x", function(d) { return x(d.category); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.frequency); })
      .attr("height", function(d) { return height - y(d.frequency)})

  });


  function type(d) {
    d.frequency = +d.frequency;
    return d;
  }
  })//close ajax
})//close outer ajax
}
      

