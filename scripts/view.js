'use strict';

var projectView = {};

projectView.hamburgerMenu = function(){
  $('#hamburger').on('click', function(){
    $('.navButton').toggleClass('is-expanded');
  });
};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.navButton', function() {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
    // $('#hamburger').click();
  });

  $('.main-nav .navButton:first').click();
  // $('#hamburger').click();
};


$(document).ready(function() {
  projectView.hamburgerMenu();
  projectView.handleMainNav();
});
