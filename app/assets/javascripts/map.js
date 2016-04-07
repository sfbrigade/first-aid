$(document).ready(function(){
  $(document).on("page:change", dMap)
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
      console.log(data)
    })
  })
}
