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
    app.currentView = 'home';
  };

  projectView.initIndexPage = function(){
    app.Project.all.forEach(function(project){
      $('#projects').append(project.toHtml());
    });

    projectView.home();
    app.menuController.init();
    app.projectController.init();
    app.aboutController.init();
  };

  module.projectView = projectView;
}(app));
