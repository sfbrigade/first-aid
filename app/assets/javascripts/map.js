$(document).ready(function(){
  $(document).on("page:change", dMap)
 disasterInformation();
 charityInformation();
})

function mapSizeChange() {
    d3.select("g").attr("transform", "scale(" + $(".map-body").width()/900 + ")");
    $(".map-body svg ").height($(".map-body").width()*0.618);
}


