'use strict';

/* Controllers */

angular.module('myApp.controllers', []).controller('ListProjectController',
		[ '$scope', function($scope) {
			$scope.message = "Hello This message is from View 1";
			$scope.projects = [ {
				"id" : 1,
				"name" : "DO-IT",
				"description" : "Dummy Description",
				"coordinators" : [ "Rahul", "Nagarjun" ],
			}, {
				"id" : 2,
				"name" : "DONOT OPEN THIS ",
				"description" : "qwerty IS HR",
				"coordinators" : [ "ram", "karthik" ],
			} ];

		} ]).controller('ProjectDetailController',
		[ '$scope', '$routeParams', function($scope, $routeParams) {
			$scope.message = "Hello This message is from View 2 ";
			var projectdetails = [ {
				"id" : 1,
				"name" : "DO-IT",
				"tasks" : [ {
					"id" : 11,
					"name" : "Create Basic Scaffold",
					"description" : "create basic project something oyulike ",
					"dueDate" : "6/20/2014",
					"createdAt" : "6/14/2014",
					"isPending" : "true",
					"assignTo" : "Nagarjun"

				}, {
					"id" : 12,
					"name" : "Create assignment for webapp",
					"description" : "create basic angular project",
					"dueDate" : "6/20/2014",
					"createdAt" : "6/14/2014",
					"isPending" : "true",
					"assignTo" : "Vaibhav"

				} ]

			} ];
			
			for (var i = 0; i < projectdetails.length; i++) {
				var obj = projectdetails[i];
				if (obj["id"] === parseInt($routeParams.projectId)) {
					$scope.projectDetails = obj;
				}
			}
		} ]);
