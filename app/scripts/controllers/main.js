'use strict';

/**
 * @ngdoc function
 * @name angularJsFormsUsingBootstrapAndMvc5App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularJsFormsUsingBootstrapAndMvc5App
 */
angular.module('angularJsFormsUsingBootstrapAndMvc5App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
