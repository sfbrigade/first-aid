
// var getCoordinates = function(){

  // $.ajax({
//     type: "GET",
//     url: '/',
//     dataType: "json"
//   })
//   .done(function(data){
//     var long = data.features[0].geometry.coordinates[0]
//     var lat = data.features[0].geometry.coordinates[1]
//     // console.log(long)
//     // console.log(lat)
//     // lat = (data.results[0].geometry.location.lat)
//     // long = (data.results[0].geometry.location.lng)

//     var map = new google.maps.Map(document.getElementById('map'), {
//       center: {lat: lat, lng: long},
//       scrollwheel: false,
//       zoom: 4
//      });

//       var marker = new google.maps.Marker({
//       position: {lat: lat, lng: long},
//       map: map
//     })
//    })
//     .fail(function(data){
//       console.log(data)
//     })
// }

// var getLongLat = function(index, earthquake){
//   var lat = []
//   var long = []
//       // console.log(earthquake.geometry.coordinates[0])
//   lat.push(earthquake.geometry.coordinates[1])
//  // var long.push(earthquake.geometry.coordinates[0])
//  console.log(lat)
// }
