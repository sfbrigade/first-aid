var disasterInformation = function(){
 $(".map-body").on("click", ".disaster_link", function(){
    event.preventDefault();
    var url = $(this).attr('href')
    $.ajax({
       url: url,
       type: "GET"
    })
    .done(function(data){
      console.log(data)
      $('#charities').after(data.latitude + " ", data.longitude)
    })
  })
}

var charityInformation = function(){
 // $(".map-body").on("click", ".disaster_link", function(){
 //    event.preventDefault();
 //    var url = $(this).attr('href')
 //    console.log(url)
 //    $.ajax({
 //       url: url + "/charities",
 //       type: "GET"
 //    })
 //    .done(function(data){
 //      $('.container-fluid').append(data)
 //    })
 //  })
}
