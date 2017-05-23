'use strict';

var app = app || {};

(function(module) {
  const aboutController = {};

  aboutController.init = function(){
    $('.main-nav').on('click', '#about', function(){
      $('.tab-content').hide();
      $('.navButton').toggleClass('is-expanded');
      $('.navButton').fadeOut();
      $('#' + $(this).data('content')).fadeIn(2000);
      app.currentView = $(this).data('content');
    });
  };

  module.aboutController = aboutController;
})(app);
