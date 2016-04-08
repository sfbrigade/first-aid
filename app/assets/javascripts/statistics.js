$(document).on("page:change", function() {


  $('#cb2').on("click", function(){
   console.log('outside')
   console.log($(this).attr('checked'))
   event.preventDefault
      if ($(this).attr('checked')){    
         dPieChart()
         dBarChart()
         $('.statisticstitle').empty()
         $('.statisticstitle').append('My Donations')
         $(this).attr('checked', false)
         }
      else{  
         console.log("testing")
         dAllPieChart()
         dAllBarChart()
         $('.statisticstitle').empty()
         $('.statisticstitle').append('All Donations')
         $(this).attr('checked', true)  
      }
   })
//calling pie charts


    
   $('.slideout-menu-toggle').on("click", dPieChart)
   $('.slideout-menu-toggle').on("click", dBarChart)


//side bar


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
            $(this).hide();
            slideoutMenu.animate({
                  right: "0px"
      

            });   
      } else {
            $('.slideout-menu-toggle').show();
            slideoutMenu.animate({
                  right: -slideoutMenuWidth
            }, 280);    
      }
    });
});
