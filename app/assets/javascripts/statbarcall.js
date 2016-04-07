// $( document ).ready( function() {
//     $("#main-sidebar").sidebar({side: "right"}).trigger("sidebar:toggle"), [{ speed: 5000 }];
//     // $(".sidebar.right").sidebar({side: "right"}).trigger("sidebar:toggle"), [{ speed: 5000 }];
      
//       } );
//       

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})



var menuSlide = function(event){
  event.preventDefault();
  d3.select(window).on("resize", mapSizeChange);

  // create menu variables
  var slideoutMenu = $('.slideout-menu');
  var slideoutMenuWidth = $('.slideout-menu').width();

  // toggle open class
  slideoutMenu.toggleClass("open");

  // slide menu
  if (slideoutMenu.hasClass("open")) {
    slideoutMenu.animate({
          right: "0px"

    });   
  } else {
    slideoutMenu.animate({
          right: -slideoutMenuWidth
    }, 280);    
  }
};
