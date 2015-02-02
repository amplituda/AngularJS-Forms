/* global angularFormsApp */
'use strict';

angularFormsApp.controller('efController', ['$scope', '$window', 'DataService',  '$routeParams',
	function efController($scope, $window, DataService, $routeParams) {
		
		if($routeParams.id) {
			$scope.employee = DataService.getEmployee($routeParams.id);
		} else {
			$scope.employee = { id: 0 };
		}

		//$scope.employee = DataService.employee;

		$scope.editableEmployee = angular.copy($scope.employee);

		$scope.departments =  [
			'Engineering',
			'Marketing',
			'Finance',
			'Administration'
		];

		$scope.programmingLanguages = [
			'C',
			'C++',
			'C#',
			'Java',
			'JavaScript',
			'Pascal',
			'Perl',
			'PHP'
		];

		$scope.shouldShowFullName = function() {
			return true;
		};

		$scope.submitForm = function() {
			
			if ($scope.editableEmployee.id === 0) {
				// insert new employee
				DataService.insertEmployee($scope.editableEmployee);
			} else {
				// update the employee
				DataService.updateEmployee($scope.editableEmployee);
			}

			$scope.employee = angular.copy($scope.editableEmployee);
			
			$window.history.back();
			//$modalInstance.close();
		};

		$scope.cancelForm = function() {
			$window.history.back();
			//$modalInstance.dismiss();
		};
	}
])
.controller('HomeController', ['$scope', '$location', '$modal', 'DataService',
	function ($scope, $location, $modal, DataService) {
	
	$scope.showCreateEmployeeForm = function  () {
		$location.path('/newEmployeeForm');
		
		/*$modal.open({
			templateUrl: 'EmployeeForm/efTemplateModal.html',
			controller: 'efController'
		});*/
	};

	$scope.showUpdateEmployeeForm = function  (id) {
		$location.path('/updateEmployeeForm/' + id);
	};

}])
;