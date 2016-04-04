// for stripe.js
// jQuery(function($) {
//   $('#payment-form').submit(function(event) {
//     var $form = $(this);

//     // Disable the submit button to prevent repeated clicks
//     $form.find('button').prop('disabled', true);

//     Stripe.card.createToken($form, stripeResponseHandler);

//     // Prevent the form from submitting with the default action
//     return false;
//   });
// });
// // sending the form to server
// function stripeResponseHandler(status, response) {
//   var $form = $('#payment-form');

//   if (response.error) {
//     // Show the errors on the form
//     $form.find('.payment-errors').text(response.error.message);
//     $form.find('button').prop('disabled', false);
//   } else {
//     // response contains id and card, which contains additional card details
//     var token = response.id;
//     // Insert the token into the form so it gets submitted to the server
//     $form.append($('<input type="hidden" name="stripeToken" />').val(token));
//     // and submit
//     $form.get(0).submit();
//   }
// };
// $(document).ready(function(){
//   $('.stripe-button-el').on("click", function(e){
//     event.preventDefault()
//         // Stripe accepts payment amounts in cents so we have to convert dollars to cents by multiplying by 100
//        var amount = parseInt( $('#custom-donation').val()*100);
//        var route = $('form').attr('action')
//        var input = $('form').serialize()
//        console.log(input)
//        $(".stripe-button").attr( "data-amount", amount );
//        $.ajax({
//           url: route,
//           method: "POST",
//           data: input
//        })
//   })
// })
