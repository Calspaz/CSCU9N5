binaryTestApp.controller('indexController', ["$scope", "$location", "_dataContext", function ($scope, $location, context) {

	$scope.activeView = sessionStorage.getItem("storedPath");

	$(function () { // Initialise modal
		$('#optionsModal').modal();
	});

	$(document).ready(function () {
		$(".dropdown-button").dropdown();
	});

	$scope.dismiss = function() {
		$('#optionsModal').modal('close');
	};

	$scope.changeView = function (path, data) {

		if (!data) {
			$scope.activeView = path;
		}

		sessionStorage.setItem("storedPath", path);

		$location.path(path + "/" + (data ? data.Id : ""));
	};

	$scope.updateDifficultyModal = function (data) {
		if (data != null) {
			sessionStorage.setItem("Difficulty", data);
			$("#submit-btn-modal").prop("disabled", false);
			document.getElementById("submit-btn-modal").style.opacity = "1";
			document.getElementById("submit-btn-modal").style.height = "auto";
			document.getElementById("submit-btn-modal-row").style.height = "auto";
			document.getElementById("submit-btn-modal-row").style.margin = "35px";
			if (data == "easy") {
				document.getElementById("easyDifficultyModal").style.boxShadow = "0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
				document.getElementById("mediumDifficultyModal").style.boxShadow = "none";
			} else {
				document.getElementById("mediumDifficultyModal").style.boxShadow = "0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";
				document.getElementById("easyDifficultyModal").style.boxShadow = "none";
			}
		}
	};

	$(document).on('click', '#toast-container .toast', function () {
		$(this).fadeOut(function () {
			$(this).remove();
		});
	});

}]);