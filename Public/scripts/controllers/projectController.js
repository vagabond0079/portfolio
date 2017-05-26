'use strict';
var app = app || {};

(function(module) {
  const projectController = {};

  projectController.init = function(){
    $('.main-nav').on('click', '#projectsButton', function(){
      $('.tab-content').hide();
      $('.navButton').toggleClass('is-expanded');
      $('.navButton').fadeOut();
      $('#' + $(this).data('content')).fadeIn(2000);
      app.currentView = $(this).data('content');
    });
  };

  module.projectController = projectController;
})(app);
