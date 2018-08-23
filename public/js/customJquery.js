$(function() {
  $(".commentContainer").hide();
  $(".hide").hide();


  // });
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

});

