$(document).on("page:change", function () {
  'user strict'
  var dispatcher  = new WebSocketRails('localhost:3000/websocket'),
      channel     = dispatcher.subscribe('disasters');

  channel.bind('new_disaster', function(disaster) {
    console.log("O no! There has been a " + disaster.category + " disaster!");
  });
})