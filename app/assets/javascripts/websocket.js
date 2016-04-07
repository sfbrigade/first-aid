// $(document).on("page:change", function(){
//   console.log("before")
//   'user strict'
//   console.log("after")
//   var dispatcher = new WebSocketRails('localhost:3000/websocket'),
//     channel      = dispatcher.subscribe('disasters');

//   channel.bind('new_disaster', function(disaster) {
//     // console.log("hello there is a " + disaster.category + " at " + disaster.longitude + " "  + disaster.latitude +"!")
//     console.log(disaster)
//   });
//   // dispatcher.trigger('new_disaster', function() {
//   //   console.log("hello")
//   // })
// })
// dispatcher.on_open = function(data) {
//   console.log('Connection has been established: ', data);
//   // You can trigger new server events inside this callback if you wish.
// }
// dispatcher.bind("websocket_chat", function(message){
//     var message_li = document.createElement("li");
//     message_li.textContent = message;
//     document.getElementById("chat_area").appendChild(message_li);
//   })


