binaryTestApp.controller('createChatController', ["$scope", "$location", "_dataContext", function($scope, $location, context) {

	$scope.chat = {Customer:null, Tracking:null, Responses:[]};

	$scope.addResponse = function (newResponse) {
		$scope.chat.Responses.push(newResponse);
		$scope.newResponse = null;
	};

}]);