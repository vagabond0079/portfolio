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

Project.prototype.toHtml = function(){
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');

  $newProject.find('h1').html(this.name);
  $newProject.find('.byline span').html(this.author);
  $newProject.find('time[pubdate]').attr('datetime', this.date);
  $newProject.find('.description').html(this.description);

  return $newProject;
}

projectData.forEach(function(projectObject){
  projects.push(new Project(projectObject));
});

projects.forEach(function(project){
  $('.projects').append(project.toHtml());
});
