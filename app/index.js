'use strict';

import directives from './directives';

const angular = require('angular');
const app = angular.module('app', []);

app.controller('MainCtrl', function () {
	this.title = 'Angular, ES6 and Webpack';
});

directives(app);




