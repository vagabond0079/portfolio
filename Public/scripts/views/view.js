'use strict';

var app = app || {};

(function(module){

  let projectView = {};

  let currentView = '';

  projectView.home = function(){
    $('.tab-content').hide();
    $('#hamburger').hide();
    $('#home').append('<div id="hi" class="my-name" class="slideinright">Hi</div></br>');
    $('#home').append('<div id="me" class="my-name">I\'m </br>Derek </br>Farmer</div>');
    $('#hi, #me').hide();
    $('#home').show();
    $('#hi').fadeIn(2000);
    $('#me').delay(1800).fadeTo(6000, 100);
    $('#hamburger').delay(2000).fadeIn();
    currentView = 'home';
  };

  projectView.handleHamburgerClick = function() {
    $('header').on('click', '#hamburger', function(){
      console.log('click');
      if(currentView == 'home'){
        $('#home').animate({'marginTop': '15vh'}, 3200, 'swing'),
        $('.navButton').delay(1000).toggleClass('is-expanded');
        $('.verticalLine').animate({'top': '-100%'}, 1800, 'swing');
        $('#hi').fadeTo(2000, 0);
        currentView = 'menu';

      }else if (currentView == 'menu'){
        $('#home').animate({'marginTop': '30vh'}, 3200, 'swing'),
        $('.navButton').delay(1000).toggleClass('is-expanded');
        $('.verticalLine').animate({'top': '300%'}, 1800, 'swing');
        currentView = 'home';

      }else{
        $('.tab-content').hide();
        $('#home').fadeIn(1000);
        $('.verticalLine').animate({'top': '-100%'}, 1800, 'swing');
        $('.navButton').delay(2000).toggleClass('is-expanded');

        currentView = 'menu';
      }
    });
  };

  projectView.initIndexPage = function(){
    app.Project.all.forEach(function(project){
      $('#projects').append(project.toHtml());
    });

    projectView.home();
    projectView.handleHamburgerClick();
    app.projectController.init();
    app.aboutController.init();
  };

  module.projectView = projectView;
}(app));
