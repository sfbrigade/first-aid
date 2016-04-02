
var getCoordinates = function(){

  $.ajax({
    type: "GET",
    url: '/',
    dataType: "json"
  })
  .done(function(data){
    lat = (data.results[0].geometry.location.lat)
    long = (data.results[0].geometry.location.lng)
      // var lat = 45
      // var long = -123
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: lat, lng: long},
      scrollwheel: false,
      zoom: 4
     });

      var marker = new google.maps.Marker({
      position: {lat: lat, lng: long},
      map: map
    })
  })
    .fail(function(data){
      console.log(data)
    })
}

