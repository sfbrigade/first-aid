$(document).ready(function(){

 hideMapOnSignIn();
 hideMapOnSignUp();
 disasterArea();
})


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
      getCoordinates(data)
    })
  })
}
