(function() {
	'use strict';
	/*
	Create an angular module called 'LunchCheck' and assign to var app
	 */
	var app = angular.module('LunchCheck', []);


	/*
	Create the controller 'LunchCheckController'
	 */
	app.controller('LunchCheckController', LunchCheckController);

	/*
	Inject '$scope' to the controller so that it will not be minified
	 */
	LunchCheckController.$inject = ['$scope'];


	/*
	Implementation of The 'LunchCheckController' function
	 */
	function LunchCheckController($scope) {
		//This message will appear as you load the app first in the message area
		$scope.message = 'Start by entering your Lunch list!';
		$scope.LunchChecker = function() {
			if (!$scope.lunch) {
				//If there is no lunch item in the text box, The following message will appear
				$scope.message = 'Please, enter your Lunch list!';
				$scope.boxColor = {
					'border-color': 'red'
				};
			} else {
				//Split the lunch list into an array with splice at ','
				var lunchList = $scope.lunch.split(',');

				//Get the length of the lunch array
				var lunchListLength = lunchList.length;
				//If lunch is lessthan or equal to 3, 'ENJOY!'
				if (lunchListLength <= 3) {
					$scope.message = 'Enjoy!';
					$scope.color = {
						'color': 'green'
					};
					$scope.boxColor = {
						'border-color': 'green'
					};
					//Then empty the text box
					$scope.lunch = '';
				} else {
					//If the lunch list is greate than 3, 'TOO MUCH!'
					$scope.message = 'Too much';
					$scope.color = {
						'color': 'red'
					};
					$scope.boxColor = {
						'border-color': 'green'
					};
					//Then empty the text box
					$scope.lunch = '';
				}

			}
		};
	}
})();