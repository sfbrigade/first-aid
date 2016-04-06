// var getCoordinates = function(data){
//   var lat = data.latitude
//   var long = data.longitude

//   var map = new google.maps.Map(document.getElementById('map'), {
//     center: {lat: lat, lng: long},
//     scrollwheel: false,
//     zoom: 14
//    });

//   infowindow = new google.maps.InfoWindow();
//   var service = new google.maps.places.PlacesService(map);
//   service.nearbySearch({
//     location: {lat: lat, lng: long},
//     radius: 32000,
//     type: ['food']
//   }, callback);

//   function callback(results, status) {
//     console.log(results)
//   }
// }
