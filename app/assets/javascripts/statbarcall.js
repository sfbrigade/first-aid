// $( document ).ready( function() {
//     $("#main-sidebar").sidebar({side: "right"}).trigger("sidebar:toggle"), [{ speed: 5000 }];
//     // $(".sidebar.right").sidebar({side: "right"}).trigger("sidebar:toggle"), [{ speed: 5000 }];
      
//       } );
//       

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$(document).ready(function () {

    $('.slideout-menu-toggle').on('click', function(event){
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
                  left: "0px"

            });   
      } else {
            slideoutMenu.animate({
                  left: -slideoutMenuWidth
            }, 250);    
      }
    });
});
