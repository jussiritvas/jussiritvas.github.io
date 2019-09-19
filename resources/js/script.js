
$(document).ready(function() {

  $('.js--wp').waypoint(function(direction) {
      $('.js--wp').addClass('animated fadeIn');
  }, {
      offset: '50%'
  });

  $('.js--wp2').waypoint(function(direction) {
      $('.js--wp2').addClass('animated fadeInUp');
  }, {
      offset: '90%'
  });

});
