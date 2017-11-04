binaryTestApp.controller('homeController', ["$scope", "$location", "_dataContext", function($scope, $location, context) {
    
    $scope.updateDifficulty = function(data) {
		if (data != null){
			sessionStorage.setItem("Difficulty", data);
            $("#submit-btn").prop( "disabled", false );
            document.getElementById("submit-btn").style.opacity = "1";
            
            if(data == "easy"){
                document.getElementById("easyDifficulty").style.boxShadow = "0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
                document.getElementById("mediumDifficulty").style.boxShadow = "none";
            } else {
               document.getElementById("mediumDifficulty").style.boxShadow = "0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
               document.getElementById("easyDifficulty").style.boxShadow = "none";
            }
		}
    };
}]);