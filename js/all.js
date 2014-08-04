
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

  $('footer ul.s-12.l-6 li.pos_2').click(function(){

    $('html,body').animate({
        scrollTop: $('#second-block').offset().top
        }, 'slow');
  });

  $('footer ul.s-12.l-6 li.pos_0').click(function(){

  $('html,body').animate({
      scrollTop: $('body').offset().top
      }, 'slow');
  });

});