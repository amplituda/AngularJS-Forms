/* global angularFormsApp */
'use strict';

angularFormsApp.directive('employeeForm', [function () {
	return {
		restrict: 'E',
		templateUrl: 'EmployeeForm/efTemplate.html'
	};
}]);