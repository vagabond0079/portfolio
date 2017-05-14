'use strict';

var projectView = {};

var currentView = '';

projectView.home = function(){
  $('.tab-content').hide();
  $('#hamburger').hide();
  $('#home').append('<div id="hi" class="my-name">Hi</div></br>');
  $('#home').append('<div id="me" class="my-name">I\'m Derek Farmer</div>');
  $('#hi, #me').hide();
  $('#home').show();
  $('#hi').fadeIn(2000);
  $('#me').delay(2200).fadeIn(2500);
  $('#hamburger').delay(4000).fadeIn();
  currentView = 'home';
};

projectView.hamburgerMenu = function(){
  $('#hamburger').on('click', function(){
    $('.navButton').toggleClass('is-expanded');
  });
};

projectView.handleAboutClick = function() {
  $('.main-nav').on('click', '#aboutme', function(){
    console.log('clickie');
    if(currentView==='home'){
      console.log('homie');
      $('#home').animate('margin-top', '25vh');
    }
  });
};

//
// projectView.handleMainNav = function() {
//   $('.main-nav').on('click', '.navButton', function() {
//     $('.tab-content').hide();
//     $('#' + $(this).data('content')).fadeIn();
//   });
// };


$(document).ready(function() {
  projectView.home();
  projectView.hamburgerMenu();
  projectView.handleAboutClick();
  // projectView.handleMainNav();
});
