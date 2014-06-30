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

module.controller('ProjectDetailController', [ '$scope', '$routeParams','ProjectsService',
		function($scope, $routeParams, ProjectsService) {
			var projectdetails = ProjectsService.list();
			
			for (var i = 0; i < projectdetails.length; i++) {
				var obj = projectdetails[i];
				if (obj["id"] === parseInt($routeParams.projectId)) {
					$scope.projectDetails = obj;
					$scope.ii=i;
				}
			}
			
			$scope.saveTask=function(){
				var obj=[{"tasks":this.newTask.task}];
				projectdetails[$scope.ii].tasks.push(obj);
//				ProjectsService.saveTask($scope.newTask);
			};
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
