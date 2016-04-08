$(document).on("page:change", function() {
  dMap();
  disasterInformation();
  charityInformation();
  $("body").tooltip({ selector: '[data-toggle=tooltip]' });
  // $('.slideout-menu-toggle').on('click', menuSlide);
  // // $('.viewAllStats').on("click", dAllPieChart)
  // // $('.viewAllStats').on("click", dAllBarChart)
  // // $('.viewMyStats').on("click", dPieChart)
  // // $('.viewMyStats').on("click", dBarChart)
  // // $('.slideout-menu-toggle').on("click", dPieChart)
  // // $('.slideout-menu-toggle').on("click", dBarChart)
  $('#update-address').on('submit', updateAddress)    
  $('.navbar-brand').on('click', freshRe)
})

function freshRe(event) {
  event.preventDefault(),
  window.location = '/',
  location.reload()
}

function mapSizeChange() {
    d3.select("g").attr("transform", "scale(" + $(".map-body").width()/900 + ")");
    $(".map-body svg ").height($(".map-body").width()*0.618);
}


var hideMapOnSignIn = function(){
 $(".btn-two").on('click', function(){
    event.preventDefault();
    window.location.replace('/users/sign_in');
  });
}

var hideMapOnSignUp = function(){
 $(".btn-one").on('click', function(){
    event.preventDefault();
    window.location.replace('/users/sign_up');
  });
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


