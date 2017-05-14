'use strict';

var projectView = {};

var currentView = '';

projectView.home = function(){
  $('.tab-content').hide();
  $('#hamburger').hide();
  $('#home').append('<div id="hi" class="my-name">Hi</div></br>');
  $('#home').append('<div id="me" class="my-name">I\'m </br>Derek </br>Farmer</div>');
  $('#hi, #me').hide();
  $('#home').show();
  $('#hi').fadeIn(2000);
  $('#me').delay(1800).fadeTo(6000, 100);
  $('#hamburger').delay(2000).fadeIn();
  currentView = 'home';
};

// projectView.hamburgerMenu = function(){
//   $('#hamburger').on('click', function(){
//     $('.navButton').delay(1000).toggleClass('is-expanded');
//   });
// };

projectView.handleMenuClick = function() {
  $('header').on('click', '#hamburger', function(){
    if(currentView==='home'){
      $('#home').animate({'marginTop': '15vh'}, 3200, 'swing', $('.navButton').delay(1000).toggleClass('is-expanded'));
      $('.verticalLine').animate({'top': '-100%'}, 1800, 'swing');
      $('#hi').fadeTo(2000, 0);
      currentView = 'menu';
    }else{
      $('#home').animate({'marginTop': '45vh'}, 3200, 'swing', $('.navButton').delay(1000).toggleClass('is-expanded'));
      $('.verticalLine').animate({'top': '300%'}, 1800, 'swing');
      currentView = 'home';
    }
  });
};


// projectView.handleMainNav = function() {
//   $('.main-nav').on('click', '.navButton', function() {
//     $('.tab-content').hide();
//     $('#' + $(this).data('content')).fadeIn();
//   });
// };


$(document).ready(function() {
  projectView.home();
  // projectView.hamburgerMenu();
  projectView.handleMenuClick();
  // projectView.handleMainNav();
});
