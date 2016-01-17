console.log('Hey there!');

var angular = require('angular');

var app = angular.module('app', []);

app.controller('MainCtrl', function () {
	"use strict";

	this.title = 'Angular, ES6 and Webpack';
});

var directives = require('./directives')(app);

//# sourceMappingURL=index-compiled.js.map