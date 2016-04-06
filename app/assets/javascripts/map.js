$(document).ready(function(){
  $(".btn-two").on('click', function(){
    event.preventDefault();
    window.location.replace('/users/sign_in');
  });
  $(".btn-one").on('click', function(){
    event.preventDefault();
    window.location.replace('/users/sign_up');
  });
  $(document).on("page:change", dMap);
  $(document).on("page:change", dPieChart);
  $(document).on("page:change", dBarChart);
 disasterArea();
})

var disasterArea = function(){
 $("body").on("click", ".disaster_link", function(){
    event.preventDefault();
    var url = $(this).attr('href')
    $.ajax({
       url: url,
       type: "GET"
    })
    .done(function(data){
      getCoordinates(data)
    })
  })
}

  // var getCoordinates = function(){

  //   $.ajax({
  //     type: "GET",
  //     url: '/',
  //     dataType: "json"
  //   })
  //   .done(function(data){
  //     lat = (data.results[0].geometry.location.lat)
  //     long = (data.results[0].geometry.location.lng)
  //       // var lat = 45
  //       // var long = -123
  //     var map = new google.maps.Map(document.getElementById('map'), {
  //       center: {lat: lat, lng: long},
  //       scrollwheel: false,
  //       zoom: 14
  //      });

  //     // infowindow = new google.maps.InfoWindow();
  //     // var service = new google.maps.places.PlacesService(map);
  //     // service.nearbySearch({
  //     //   location: map.center,
  //     //   radius: 32000,
  //     //   type: ['food']
  //     // }, callback);

  //       var marker = new google.maps.Marker({
  //       position: {lat: lat, lng: long},
  //       map: map
  //     })

  //     // function callback(results, status) {
  //     //   console.log(results)
  //     //   if (status === google.maps.places.PlacesServiceStatus.OK) {
  //     //     for (var i = 0; i < results.length; i++) {
  //     //       createMarker(results[i]);
  //     //     }
  //     //   }
  //     // }
  //     // function createMarker(place) {
  //     //   var placeLoc = place.geometry.location;
  //     //   var marker = new google.maps.Marker({
  //     //     map: map,
  //     //     position:placeLoc
  //     //   });

  //     //   google.maps.event.addListener(marker, 'click', function() {
  //     //     infowindow.setContent(place.name);
  //     //     infowindow.open(map, this);
  //     //   });
  //     //  }
  //   })
  //     .fail(function(data){
  //       console.log(data)
  //     })
  // }


//   var map;
// var infowindow;

// function initMap() {
  // var pyrmont = {lat: -33.867, lng: 151.195};

  // map = new google.maps.Map(document.getElementById('map'), {
  //   center: pyrmont,
  //   zoom: 15
  // });

// }



// var getLongLat = function(index, earthquake){
//   var lat = []
//   var long = []
//       // console.log(earthquake.geometry.coordinates[0])
//   lat.push(earthquake.geometry.coordinates[1])
//  // var long.push(earthquake.geometry.coordinates[0])
//  console.log(lat)
// }
