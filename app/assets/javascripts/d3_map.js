var dMap = function(){


d3.select(window).on("resize", mapSizeChange);


  var projection = d3.geo.albersUsa()
      .scale(1100)
  var path = d3.geo.path()
      .projection(projection);
  var svg = d3.select(".map-body")
            .append("svg")
            .attr("width", "100%")
              .append("g")

  // This creates a responsive size for the map
  d3.select("g").attr("transform", "scale(" + $(".map-body").width()/900 + ")");
      $("svg").height($(".map-body").width()*0.618);

  svg.append("rect")
      .style("fill", "red")
      .attr("width", "100%")
      .attr("class", "background")
      .on("click", clicked)

  var g = d3.select("g");

  var width = $(".map-body").width(),
      height = $(".map-body").height(),
      centered;

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
        .style("opacity",0).transition().duration(5000).style("opacity", 100)

  });// close map

  function clicked(d) {
    var x, y, k;
    console.log(d)

    if (d && centered !== d) {
      var centroid = path.centroid(d);
      x = centroid[0];
      y = centroid[1];
      k = 3; //change zoom with if statement
      centered = d;
    } else {
      x = 900/2;
      y =  500/2;
      k = $(".map-body").width()/900 ;
      centered ;
    }// close if statement

    g.selectAll("path")
        .classed("active", centered && function(d) { return d === centered; })

    g.transition()
        .duration(1000)
        .attr("transform", "translate(" + $(".map-body").width() / 2 + "," + $(".map-body").height() / 2 + ")scale(" + k + ")translate(" + -x + "," + -y + ")")
        .style("stroke-width", 1.5 / k + "px");
  }//close clicked function

  disasters = function(){
    console.log("timer")
  // the cordinates csv is here
    $.ajax({
      type: "GET",
      url: "/disasters",
      dataType: "json"
    })
    .done(function(response) { // start making circles with data

        g.selectAll("circle")
           .data(response)
           .enter()
           .append("a")
           .attr("class", "disaster_link")
           .attr("xlink:href", function(d) {
                return "/disasters/" + d.disasters_id;
            })
           .append("circle")
           .attr("cx", function(d) {
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
           })
            .style("fill", function(d){

              var today = new Date();
              var todays_date = today.toLocaleDateString()

              var oneWeekAgo = new Date();
              oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
              var last_weeks_date = oneWeekAgo.toLocaleDateString();

              // var fiveMinsAgo = new Date();
              // fiveMinsAgo.setDate(fiveMinsAgo.getDate() - units*360000);
              // var last_weeks_date = oneWeekAgo.toLocaleDateString();

              var dateOfDisaster = new Date(d.date);
              var disaster_date = dateOfDisaster.toLocaleDateString();

          
              if(disaster_date === todays_date){
                    if (dateOfDisaster.getTime() > today.getTime()- 18 * 60000){
                      return "green"}
                    else{
                      return "red"
                    }
              }else if (disaster_date < todays_date && disaster_date > last_weeks_date){
                return "orange"
              }else{
                return "yellow"
              }
            })//close style function
            .style("position", "relative").style("z-index", "100")
             .attr("r", 0)
             .transition()
             .duration(250)
             .attr("r", 7)
             .transition()
             .duration(250)
             .attr("r", 2)
             .transition()
             .duration(250)
             .attr("r", 5)

           g.selectAll("circle").on('mouseover', tip.show)
           .on('mouseout', tip.hide)

      })// close Ajax done

  }// closing disasters





  // var recentDisasters = function(){
  //   console.log("inside the function")

  //      $.ajax({
  //     type: "GET",
  //     url: "/disasters",
  //     dataType: "json"
  //   })
  //   .done(function(response) { // start making circles with data

  //       g.selectAll("newcircle")
  //          .data(response)
  //          .enter()
  //          .append("a")
  //          .attr("class", "disaster_link")
  //          .attr("xlink:href", function(d) {
  //               return "/disasters/" + d.disasters_id;
  //           }) 
  //          .append("newcircle")
  //          .attr("cx", function(d) {
  //             var coords = projection([d.lon, d.lat]);
  //             if (coords) {
  //                  return coords[0];
  //             }
  //          })
  //          .attr("cy", function(d) {
  //                  var coords = projection([d.lon, d.lat]);
  //             if (coords) {
  //                  return coords[1];
  //             }
  //          })
  //           .style("fill", function(d){

  //             var today = new Date();
  //             var todays_date = today.toLocaleDateString()

  //             var oneWeekAgo = new Date();
  //             oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
  //             var last_weeks_date = oneWeekAgo.toLocaleDateString();

  //             var dateOfDisaster = new Date(d.date);
  //             var disaster_date = dateOfDisaster.toLocaleDateString();

  //             if(disaster_date === todays_date){
  //               return "purple"
  //             }else if (disaster_date < todays_date && disaster_date > last_weeks_date){
  //               return "orange"
  //             }else{
  //               return "yellow"
  //             }
  //           })//close style function
  //           .style("position", "relative").style("z-index", "100")
  //            .attr("r", 0)
  //            .transition()
  //            .duration(250)
  //            .attr("r", 7)
  //            .transition()
  //            .duration(250)
  //            .attr("r", 2)
  //            .transition()
  //            .duration(250)
  //            .attr("r", 5)
 
  //          g.selectAll("newcircle").on('mouseover', tip.show)
  //          .on('mouseout', tip.hide)

  //     })// close Ajax done

  // }// closing disasters



setInterval(disasters, 30000);

  // console.log("before")
  // 'user strict'
  // console.log("after")
  // var dispatcher = new WebSocketRails('localhost:3000/websocket'),
  //   channel      = dispatcher.subscribe('disasters');

  // channel.bind('new_disaster', function(disaster) {
  //   console.log("hello im inside the event listener")
  //   // console.log("hello there is a " + disaster.category + " at " + disaster.longitude + " "  + disaster.latitude +"!")
  //   setTimeout(recentDisasters(disaster), 1000)
  // });



  // dispatcher.trigger('new_disaster', function() {
  //   console.log("hello")
  // })




  setTimeout(disasters, 1500); // create disasters


  var tip = d3.tip()//create Tool Tips
    .attr('class', 'd3-tip')
    .offset([-10, 0])
    .html(function(d) {

      return "<strong>Category:</strong> <span style='color:red'>" + d.category + "</span>";
    })

  svg.call(tip);



// var getCoordinates = function(data){
//       var lat = data.latitude
//       var long = data.longitude

//       infowindow = new google.maps.InfoWindow();
//       var service = new google.maps.places.PlacesService();
//       service.nearbySearch({
//         location: {lat: lat, lng: long},
//         radius: 32000,
//         type: ['food']
//       }, callback);


//       function callback(results, status) {
//         console.log(results)
//       }
    
//   } 

}
