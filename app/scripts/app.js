'use strict';

var angularFormsApp = angular.module('angularFormsApp', ['ngRoute', 'ui.bootstrap']);

angularFormsApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'home.html',
      controller: 'HomeController'
    })
    .when('/newEmployeeForm', {
      templateUrl: 'EmployeeForm/efTemplate.html',
      controller: 'efController'
    })
    .when('/updateEmployeeForm/:id', {
      templateUrl: 'EmployeeForm/efTemplate.html',
      controller: 'efController'
    })
    .otherwise({
      redirectTo: '/home'
    });
}]);