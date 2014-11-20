/* 
Billy Cen
INFO 343
Assignment 6

Angular application for the address book challenge

*/

"use strict";

angular.module('AddressBook', [])
	.controller('AddressController', function($scope) {
		$scope.employees = pawneeEmployees;
		$scope.order = 'lastName';

		$scope.isSortedBy = function(colName) {
			return $scope.order == colName;
		};

	});