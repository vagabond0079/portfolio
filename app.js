'use strict';

function Project (name, gitUrl, date, imageUrl){
  this.name = name;
  this.gitUrl = gitUrl;
  this.date = date;
  this.imageUrl = imageUrl;
}

$('.hamburger').on('click', function(){
  $('.navButton').css('display', 'inline-block');
});
