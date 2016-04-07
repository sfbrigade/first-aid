$(document).ready(function(){
  $(document).on("page:change", dMap)
 disasterArea();
})

function mapSizeChange() {
    d3.select("g").attr("transform", "scale(" + $(".map-body").width()/900 + ")");
    $(".map-body svg ").height($(".map-body").width()*0.618);
}


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
