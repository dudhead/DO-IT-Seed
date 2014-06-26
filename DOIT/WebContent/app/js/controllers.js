'use strict';

/* Controllers */

angular.module('myApp.controllers', []).controller('CreateProjectController',
		[ '$scope', function($scope) {
			$scope.message = "Hello This message is from View 1";
			$scope.projects = [ {
				"id" : 1,
				"name" : "Hashedin HR",
				"description" : "HR IS HR",
				"coordinators" : [ "ram", "sham", "boom" ],
				"isSelect" : "true"
			},{
				"id" : 2,
				"name" : "qwerty ",
				"description" : "qwerty IS HR",
				"coordinators" : [ "ram", "karthik" ],
				"isSelect" : "false"
			}];

		} ]).controller('ProjectDetailController', [ '$scope', function($scope) {
	$scope.message = "Hello This message is from View 2";
	
} ]);
