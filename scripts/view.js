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

projectView.handleHamburgerClick = function() {
  $('header').on('click', '#hamburger', function(){
    if($('#home').data('current')){
      $('#home').animate({'marginTop': '15vh'}, 3200, 'swing', $('.navButton').delay(1000).toggleClass('is-expanded'));
      $('.verticalLine').animate({'top': '-100%'}, 1800, 'swing');
      $('#hi').fadeTo(2000, 0);
      currentView = 'menu';

//Kyle: Consider using a 'toast' menu rather than navigating back to the 'menu' page.
//Kyle: Consider using a data-attribute for 'current' rather than a currentView variable and then adding/removing the class as necessary through jQuery.
//Kyle: Could use multiple ifs or a switch to choose the page with the current data-attribute.

    }else{
      $('#home').animate({'marginTop': '30vh'}, 3200, 'swing', $('.navButton').delay(1000).toggleClass('is-expanded'));
      $('.verticalLine').animate({'top': '300%'}, 1800, 'swing');
      currentView = 'home';
    }
  });
};

projectView.handleMainNav = function() {
  $('.main-nav').on('click', '.navButton', function(){
    $('.tab-content').hide();
    $('.navButton').fadeOut();
    $('#' + $(this).data('content')).fadeIn(2000);
    currentView = 'aboutme';
  });

  // $('.main-nav').on('click', '.navButton', function() {
  //   console.log('navclick');
  //   $('.tab-content').hide();
  //   $('#' + $(this).data('content')).fadeIn();
  // });
};

projectView.initIndexPage = function(){
  Project.all.forEach(function(project){
    $('#projects').append(project.toHtml());
  });

  projectView.home();
  // projectView.hamburgerMenu();
  projectView.handleHamburgerClick();
  projectView.handleMainNav();
};
