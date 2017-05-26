'use strict';
var app = app || {};

page('/projects', app.projectController.init);
page('/about', app.aboutController.init);

page();
