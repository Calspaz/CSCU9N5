binaryTestApp.controller('binaryTestController', ["$scope", "$location", "_dataContext", function($scope, $location, context) {
    $scope.difficulty = sessionStorage.getItem("Difficulty") || "easy";
}]);