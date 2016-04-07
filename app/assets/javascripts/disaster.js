var disasterInformation = function(){
 $(".map-body").on("click", ".disaster_link", function(){
    event.preventDefault();
    var url = $(this).attr('href')
    $.ajax({
       url: url,
       type: "GET"
    })
    .done(function(data){
      // console.log(data)
      // $('#charities').append(data.latitude + " ", data.longitude)
    })
  })
}

var charityInformation = function(){
 $(".map-body").on("click", ".disaster_link", function(){
    event.preventDefault();
    var url = $(this).attr('href')
    // console.log(url)
    var that = this
    $.ajax({
       url: url + "/charities",
       type: "GET"
    })
    .done(function(data){
      var url2 = $(that).attr('href')
      console.log(data)
        charityList = $('.charity_info');
        charityList.toggleClass("open")
//         console.log(charityList.hasClass("open"))
        if (charityList.hasClass("open")){
          $('.charity_info').append(data)

        }else{
          $('.charity_info').empty()
        }
    })
  })
}
