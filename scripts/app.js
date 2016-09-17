(function(){

	'use strict';

	angular.module('LunchCheck', [])
	.controller("LunchCheckController", LunchCheckController);

	LunchCheckController.$inject = ["$scope", "$filter"];

	function LunchCheckController ($scope, $filter){
		$scope.dishesList = "";
		$scope.infoMessage = ""

		$scope.statusInputFieldClass = "";
		$scope.statusMessageClass = "";

		$scope.checkTooMuch = function () {
			var _dList = $scope.dishesList;
			if(_dList.trim() === ""){
				$scope.infoMessage = "Please enter data first";
				$scope.statusMessageClass = "text-danger";
				$scope.statusInputFieldClass = "has-error";
				return;
			}

			var tempArray = _dList.split(",");
			var dishesArray = [];
			for(var i = 0; i < tempArray.length; i++){
				var val = tempArray[i].trim();
				if(val !== ""){
					dishesArray.push(val);
				}
			}
			if(dishesArray.length == 0){
				$scope.infoMessage = "Please enter data first. (Do not support empty items)";
				$scope.statusMessageClass = "text-danger";
				$scope.statusInputFieldClass = "has-error";
				return;
			}

			if(dishesArray.length <= 3){
				$scope.infoMessage = "Enjoy!";
			}else{
				$scope.infoMessage = "Too much!";
			}

			if(dishesArray.length != tempArray.length){
				$scope.infoMessage += " List of dishes contains empty items."
			}

			$scope.statusInputFieldClass = "has-success";
			$scope.statusMessageClass = "text-success";
		};
	};

})();