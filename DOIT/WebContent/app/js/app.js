'use strict';

// Declare app level module which depends on filters, and services
angular.module(
		'myApp',
		[ 'ngRoute', 'myApp.filters', 'myApp.services', 'myApp.directives',
				'ui.bootstrap', 'myApp.controllers' ]).config(
		[ '$routeProvider', '$locationProvider',
				function($routeProvider, $locationProvider) {
					// $locationProvider.html5Mode(true);
					$routeProvider.when('/listproject', {
						templateUrl : 'partials/listproject.html',
						controller : 'ListProjectController'
					}).when('/projectdetail/:projectId', {
						templateUrl : 'partials/projectdetail.html',
						controller : 'ProjectDetailController'
					}).otherwise({
						redirectTo : '/listproject'
					});
					;
				} ]);

angular.module('myApp').constant('appSettings', {
	AppURI : 'http://127.0.0.1:9080/'
});
