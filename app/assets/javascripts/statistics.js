$(document).ready(function () {


//calling pie charts
   $('.viewAllStats').on("click", dAllPieChart)
   $('.viewAllStats').on("click", dAllBarChart)     
   $('.viewMyStats').on("click", dPieChart)
   $('.viewMyStats').on("click", dBarChart)
   $('.viewMyStats').on("click", function(){
      $(this).hide()
      $('.viewAllStats').show()
      $('.statisticstitle').empty()
      $('.statisticstitle').append('My Donations')


   })
    $('.viewAllStats').on("click", function(){
      $(this).hide()
      $('.viewMyStats').show()
      $('.statisticstitle').empty()
      $('.statisticstitle').append('All Donations')
   })


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
