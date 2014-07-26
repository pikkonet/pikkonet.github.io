
jQuery(document).ready(function() {

  $('body').fadeIn(2000);
 
  $('.top_bar li.pos_2').click(function(){

    $('html,body').animate({
        scrollTop: $('#second-block').offset().top
        }, 'slow');
  });

  $('.top_bar li.pos_0').click(function(){

  $('html,body').animate({
      scrollTop: $('#contact-block').offset().top
      }, 'slow');
  });

});