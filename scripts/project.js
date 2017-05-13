'use strict';

var projects = [];

function Project (projectObject){
  this.name = projectObject.name;
  this.author = projectObject.author;
  this.date = projectObject.date;
  this.gitUrl = projectObject.gitUrl;
  this.imageUrl = projectObject.imageUrl;
  this.description = projectObject.description;
}

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

projectData.forEach(function(projectObject){
  projects.push(new Project(projectObject));
});

projects.forEach(function(project){
  $('#projects').append(project.toHtml());
});
