/* global angularFormsApp */
'use strict';

angularFormsApp.factory('DataService', [function() {

	var getEmployee = function(id) {

		if (id === '123') {
			return {
				id: 123,
				fullName: 'Mlton Waddam',
				notes: 'The ideal employee. Just don\'t touch his red staple',
				department: 'Administration',
				dateHired: '7/11/14',
				breakTime: 'Jul 11 2014 3:00 PM',
				perkCar: true,
				perkStock: false,
				perkSixWeeks: true,
				payrollType: 'none'
			};
		}
		return undefined;
	};

	var insertEmployee = function(newEmployee) {
		return true;
	};

	var updateEmployee = function(employee) {
		return true;
	};

	return {
		insertEmployee: insertEmployee,
		updateEmployee: updateEmployee,
		getEmployee: getEmployee
	};
}]);