'use strict';

/* Controllers */
var module = angular.module('myApp.controllers', []);

module.controller('ListProjectController', function($scope, ProjectsService) {
	$scope.projects = ProjectsService.list();

	$scope.saveProject = function() {
		ProjectsService.save($scope.newproject);
		$scope.newcontact = {};
	};
});

module.controller('ProjectDetailController', [ '$scope', '$routeParams',
		function($scope, $routeParams) {
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
					"isPending" : "false",
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

var ModalDemoCtrl = function($scope, $modal) {


	$scope.open = function(size) {

		var modalInstance = $modal.open({
			templateUrl : 'myModalContent.html',
			controller : ModalInstanceCtrl,
			size : size,
		});

		modalInstance.result.then(function(selectedItem) {
			$scope.selected = selectedItem;
		});
	};
};

// Please note that $modalInstance represents a modal window (instance)
// dependency.
// It is not the same as the $modal service used above.

var ModalInstanceCtrl = function($scope, $modalInstance, ProjectsService) {


	$scope.ok = function() {
		ProjectsService.save($scope.newproject);
		$modalInstance.close();
	};

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
};
