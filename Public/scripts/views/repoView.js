'use strict';
var app = app || {};

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#aboutme');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  const render = Handlebars.compile($('#repo-template').text());

  repoView.index = function() {
    ui();

    $('#aboutme ul').append(
      app.repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(app);
