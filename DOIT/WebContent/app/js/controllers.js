'use strict';

/* Controllers */
var module = angular.module('myApp.controllers', []);

module.controller('ListProjectController', function($scope, ProjectsService) {
	$scope.projects = ProjectsService.list();

	$scope.saveProject = function() {
		ProjectsService.save($scope.newproject);
//		$scope.newcontact = {};
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

var ModalDemoCtrl = function($scope, $modal, $log) {

	$scope.items = [ 'item1', 'item2', 'item3' ];

	$scope.open = function(size) {

		var modalInstance = $modal.open({
			templateUrl : 'myModalContent.html',
			controller : ModalInstanceCtrl,
			size : size,
			resolve : {
				items : function() {
					return $scope.items;
				}
			}
		});

		modalInstance.result.then(function(selectedItem) {
			$scope.selected = selectedItem;
		}, function() {
			$log.info('Modal dismissed at: ' + new Date());
		});
	};
};

// Please note that $modalInstance represents a modal window (instance)
// dependency.
// It is not the same as the $modal service used above.

var ModalInstanceCtrl = function($scope, $modalInstance, items) {

	$scope.items = items;
	$scope.selected = {
		item : $scope.items[0]
	};

	$scope.ok = function() {
		$modalInstance.close($scope.selected.item);
	};

	$scope.cancel = function() {
		$modalInstance.dismiss('cancel');
	};
};
