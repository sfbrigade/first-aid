// $(document).on('page:change', function() {
//   $('body').on('click', '.login', modalCall)
// });
var callOnce = false
var modalCall = function() {
  if (!callOnce) {
    $(function(){
      $('#address-modal').modal()
    }) 
  }
  callOnce = true
}

var updateAddress = function(event) {
  event.preventDefault()
  console.log(this)
  var data = $('#update-address').serialize()
  var route = $(this).attr('action');
  console.log(route)
  $.ajax ({
      url: route,
      type: 'PUT',
      data: data,
      success: dismissModal
    })
}

var dismissModal = function(response) {
  if (response === true) {
    $('#address-modal').modal('toggle')
  }
}
