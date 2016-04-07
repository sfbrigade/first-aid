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
    $.ajax({
       url: url + "/charities",
       type: "GET"
    })
    .done(function(data){
      console.log(data)
        charityList = $('.test');
        charityList.toggleClass("open")
        console.log(charityList.hasClass("open"))
        if (charityList.hasClass("open")){
          for(i=0;i<data.length;i++){
            $('.test').append(data[i].title)
            $('.test').append(data[i].city)
            $('.test').append(data[i].state)
            $('.test').append(data[i].description)
            $('.test').append(data[i].url)
            $('.test').append(data[i].phone)
            $('.test').append(data[i].street_address)
          }
        }else{
          $('.test').empty()
        }
      // }
    })
  })
}
