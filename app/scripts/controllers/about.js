'use strict';

/**
 * @ngdoc function
 * @name angularJsFormsUsingBootstrapAndMvc5App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularJsFormsUsingBootstrapAndMvc5App
 */
angular.module('angularJsFormsUsingBootstrapAndMvc5App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
