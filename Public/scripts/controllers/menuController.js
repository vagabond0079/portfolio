'use strict';

var app = app || {};

(function(module) {
  const menuController = {};

  menuController.init = function() {
    $('header').on('click', '#hamburger', function(){
      if(app.currentView == 'home'){
        $('#home').animate({'marginTop': '15vh'}, 3200, 'swing'),
        $('.navButton').delay(1000).toggleClass('is-expanded');
        $('.verticalLine').animate({'top': '-100%'}, 1800, 'swing');
        $('#hi').fadeTo(2000, 0);
        app.currentView = 'menu';

      }else if (app.currentView == 'menu'){
        $('#home').animate({'marginTop': '30vh'}, 3200, 'swing'),
        $('.navButton').delay(1000).toggleClass('is-expanded');
        $('.verticalLine').animate({'top': '300%'}, 1800, 'swing');
        app.currentView = 'home';

      }else{
        $('.tab-content').hide();
        $('#home').fadeIn(1000);
        $('.verticalLine').animate({'top': '-100%'}, 1800, 'swing');
        $('.navButton').delay(2000).toggleClass('is-expanded');

        app.currentView = 'menu';
      }
    });
  };

  module.menuController = menuController;
})(app);
