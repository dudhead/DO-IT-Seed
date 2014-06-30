'use strict';

/* Services */

// Demonstrate how to register services
// In this case it is a simple value service.
var module = angular.module('myApp.services', []);

module.service('ProjectsService', function() {
	var projects = [ {
		"id" : 1,
		"name" : "DO-IT again",
		"description" : "Dummy Description",
		"coordinators" : [ "Rahul", "Nagarjun" ],
		"tasks" : [ {
			"task" : "Create Basic Scaffold",
			"description" : "create basic project something oyulike ",
			"dueDate" : "6/20/2014",
			"createdAt" : "6/14/2014",
			"isComplete" : "true",
			"isClosed" : "false",
			"assignedTo" : "Nagarjun",
			"priority" : "high"

		}, {
			"task" : "Create advanced Scaffold",
			"description" : "create advanced project something oyulike ",
			"dueDate" : "6/20/2014",
			"createdAt" : "6/14/2014",
			"isComplete" : "true",
			"isClosed" : "false",
			"assignedTo" : "Nagarjun",
			"priority" : "low"
		} ],
	}, {
		"id" : 2,
		"name" : "DONOT OPEN THIS ",
		"description" : "qwerty IS HR",
		"coordinators" : [ "ram", "karthik" ],
	} ];

	// simply returns the projects list
	this.list = function() {
		return projects;
	};

	this.save = function(project) {
		// if (project.id == null) {
		// if this is new project, add it in projects array
		project.id = projects.length;
		projects.push(project);
		// } else {
		// // for existing project, find this project using id
		// // and update it.
		// for (i in projects) {
		// if (projects[i].id == project.id) {
		// projects[i] = project;
		// }
		// }
		// }
	};

	this.saveTask = function(task) {
		projects.tasks.push(task);
	};
});
