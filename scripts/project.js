'use strict';

function Project (projectObject){
  this.name = projectObject.name;
  this.author = projectObject.author;
  this.date = projectObject.date;
  this.gitUrl = projectObject.gitUrl;
  this.imageUrl = projectObject.imageUrl;
  this.description = projectObject.description;
}

Project.all = [];

// function Project (projectObject) {
//   for (key in projectObject) {
//     this[key] = projectObject[key];
//   }
// }

Project.prototype.toHtml = function() {
  var template = $('#project-template').html();
  var templateRender = Handlebars.compile(template);
  this.daysAgo = parseInt((new Date() - new Date(this.date))/60/60/24/1000);

  return templateRender(this);
};

// projectData.forEach(function(projectObject){
//   projects.push(new Project(projectObject));
// });
//
// Project.all.forEach(function(project){
//   $('#projects').append(project.toHtml());
// });

Project.loadAll = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.created)) - (new Date(a.created));
  });

  rawData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  });
};

Project.fetchAll = function() {
  if (localStorage.rawData) {
    Project.loadAll(JSON.parse(localStorage.rawData));
    projectView.initIndexPage();
  } else {
    $.getJSON('./data/projectData.json')
      .then(function(rawData) {
        localStorage.rawData = JSON.stringify(rawData);
        Project.loadAll(rawData);
        projectView.initIndexPage();
      }, function(err) {
        console.log(err);
      });
  }
};
