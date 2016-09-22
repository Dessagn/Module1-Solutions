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
			} else {
				//Split the lunch list into an array with splice at ','
				var lunchList = $scope.lunch.split(',');
				//Remove all the empty elements
				removeEmptyLists(lunchList);
				//Get the length of the lunch array
				var lunchListLength = lunchList.length;
				//If lunch is lessthan or equal to 3, 'ENJOY!'
				if (lunchListLength <= 3) {
					$scope.message = 'Enjoy!';
					//Then empty the text box
					$scope.lunch = '';
				} else {
					//If the lunch list is greate than 3, 'TOO MUCH!'
					$scope.message = 'Too much';
					//Then empty the text box
					$scope.lunch = '';
				}

				/*
				Implement the removal of the empty elements in the lunch array if any.
				 */
				function removeEmptyLists(lunchList) {
					for (var i = 0; i < lunchList.length; i++) {
						if (!lunchList[i]) {
							lunchList.splice(i, 1);
						}
					}

				}
			}
		};
	}
})();