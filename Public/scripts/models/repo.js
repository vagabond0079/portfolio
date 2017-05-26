'use strict';
var app = app || {};

(function(module) {
  const repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    $.ajax({
      url: '/github/user/repos',
      method: 'GET',
    })
    .then(
      data => {
        data.forEach(repo => {
          repos.all.push(repo);
        });
        callback();
      });
  };

  module.repos = repos;
})(app);
