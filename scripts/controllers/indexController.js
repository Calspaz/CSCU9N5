binaryTestApp.controller('indexController', ["$scope", "$location", "_dataContext", function($scope, $location, context) {
	var clickSound = new Audio('sounds/click.mp3');
	var switchSound = new Audio('sounds/switch.mp3');
    $scope.activeView = sessionStorage.getItem("storedPath");

    $(function() { // Initialise modal
        $('#optionsModal').modal();
    });

    $scope.dismiss = function() {
        $('#optionsModal').modal('close');
    };

    $scope.changeView = function(path, data) {

        if (!data) {
            $scope.activeView = path;
        }

        sessionStorage.setItem("storedPath", path);

        $location.path(path + "/" + (data ? data.Id : ""));
        $(".popover").hide();
    };

    $scope.openModal = function() {
        $('#optionsModal').modal('open');
    };
    $scope.updateDifficultyModal = function(data) {
        if (data != null) {
            sessionStorage.setItem("Difficulty", data);
            if (data == "easy") {
                $("#submit-btn-modal").prop("disabled", false);
                document.getElementById("submit-btn-test-modal").style.display = "none";
                document.getElementById("submit-btn-test-modal-row").style.display = "none";
                document.getElementById("submit-btn-modal").style.display = "block";
                document.getElementById("submit-btn-modal-row").style.display = "block";
                document.getElementById("easyDifficultyModal").style.boxShadow = "0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
                document.getElementById("mediumDifficultyModal").style.boxShadow = "none";
            } else {
                $("#submit-btn-test-modal").prop("disabled", false);
                document.getElementById("submit-btn-modal").style.display = "none";
                document.getElementById("submit-btn-modal-row").style.display = "none";
                document.getElementById("submit-btn-test-modal").style.display = "block";
                document.getElementById("submit-btn-test-modal-row").style.display = "block";
                document.getElementById("mediumDifficultyModal").style.boxShadow = "0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
                document.getElementById("easyDifficultyModal").style.boxShadow = "none";
            }
        }
    };

    $(document).on('click', '#toast-container .toast', function() {
        $(this).fadeOut(function() {
            $(this).remove();
        });
    });

    $scope.clickSound = function() {
        clickSound.play();
    };

	$scope.switchSound = function() {
        switchSound.play();
    };
}]);