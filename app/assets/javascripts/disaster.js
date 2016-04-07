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
      // console.log(that)
      var url2 = $(that).attr('href')
      console.log(url2)
        charityList = $('.charity_info');
        charityList.toggleClass("open")
        console.log(charityList.hasClass("open"))
        if (charityList.hasClass("open")){
          for(i=0;i<data.length;i++){
            $('.charity_info').append('<a href="' + url2  + '/charities/' + data[i].id + '"class="charity_title"> '+ data[i].title + '</a>')
            $('.charity_info').append("<p class='charity_city'>"+data[i].city+ ", " + data[i].state +"<p>")
            $('.charity_info').append("<p class='charity_description>"+data[i].description+"<p>")
            // $('.charity_info').append(data[i].url)
            $('.charity_info').append("<p class='charity_phone'>"+data[i].phone+"<p>")
            // $('.charity_info').append("<p>"+data[i].street_address+"<p>")
            $('.charity_info').append("<hr>")
          }
        }else{
          $('.charity_info').empty()
        }
    })
  })
}
