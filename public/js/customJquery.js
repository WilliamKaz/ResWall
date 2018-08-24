$(function() {





}
);


  $('.show').on('click', function() {
    $(this).closest('.post').find('.hide').toggle();
    $(this).closest('.post').find('.show').toggle();
    $(this).closest('.post').find(".commentContainer").slideDown();
  });

   $('.hide').on('click', function() {
    $(this).closest('.post').find('.show').toggle();
    $(this).closest('.post').find('.hide').toggle();
    $(this).closest('.post').find(".commentContainer").slideUp();
  });

  $('.commentSubmit').on('click', function(e) {
     e.preventDefault();
    $('.commentInput').val('');
  });




   // code sourced from https://codepen.io/neilpomerleau/pen/wzxzQr
   // logs status of star rating
  $(':radio').change(function() {
    console.log('New star rating: ' + this.value);
  });


