binaryTestApp.controller('binaryTestController', ["$scope", "$location", "_dataContext", "_toast", function ($scope, $location, context, _toast) {
    var row1digit1, row1digit2, row1digit3, row1digit4, row1digit5, row1digit6, row1digit7, row1digit8;
    var row2digit1, row2digit2, row2digit3, row2digit4, row2digit5, row2digit6, row2digit7, row2digit8;
    var row3digit1, row3digit2, row3digit3, row3digit4, row3digit5, row3digit6, row3digit7, row3digit8;
    var row4digit1, row4digit2, row4digit3, row4digit4, row4digit5, row4digit6, row4digit7, row4digit8;
    var row5digit1, row5digit2, row5digit3, row5digit4, row5digit5, row5digit6, row5digit7, row5digit8;
    var row1Summary, row2Summary, row3Summary, row4Summary, row5Summary;
    $scope.row1Summary = $scope.row2Summary = $scope.row3Summary = $scope.row4Summary = $scope.row5Summary = 0;
    $scope.row1digit1 = $scope.row1digit2 = $scope.row1digit3 = $scope.row1digit4 = $scope.row1digit5 = $scope.row1digit6 = $scope.row1digit7 = $scope.row1digit8 = false;
    $scope.row2digit1 = $scope.row2digit2 = $scope.row2digit3 = $scope.row2digit4 = $scope.row2digit5 = $scope.row2digit6 = $scope.row2digit7 = $scope.row2digit8 = false;
    $scope.row3digit1 = $scope.row3digit2 = $scope.row3digit3 = $scope.row3digit4 = $scope.row3digit5 = $scope.row3digit6 = $scope.row3digit7 = $scope.row3digit8 = false;
    $scope.row4digit1 = $scope.row4digit2 = $scope.row4digit3 = $scope.row4digit4 = $scope.row4digit5 = $scope.row4digit6 = $scope.row4digit7 = $scope.row4digit8 = false;
    $scope.row5digit1 = $scope.row5digit2 = $scope.row5digit3 = $scope.row5digit4 = $scope.row5digit5 = $scope.row5digit6 = $scope.row5digit7 = $scope.row5digit8 = false;

    $(document).ready(function () {
        $('.tooltipped').tooltip({ delay: 50 });
        $scope.difficulty = sessionStorage.getItem("Difficulty") || "easy";
        _toast.info("Good luck!");

        // Instance the tour
        var tour = new Tour({
            debug: true,
            storage: false,
            template: function () {
                return (
                        "<div class='popover tour'>" + 
                        "<div class='arrow'></div>" +
                        "<h3 class='popover-title'></h3>" +
                        "<div class='popover-content'></div>" +
                        "<div class='popover-navigation'>" +
                        "<button class='btn btn-default grey darken-2 white-text' data-role='prev'><b>«</b></button>" +
                        "<button class='btn btn-default grey darken-2 white-text' data-role='next'><b>»</b></button>" +
                        "</div>" +
                        "<button class='btn grey darken-2 white-text btn-default end-tour-button' data-role='end'>End tour</button>" +
                        "</div>"
                );
            },
            steps: [
                {
                    element: "#tour-column-headers",
                    title: "Firstly...",
                    content: "Each column represents 1 bit from an 8 bit byte.",
                    placement: "bottom"
                },
                {
                    element: "#tour-column-first-input",
                    title: "Secondly...",
                    content: "Each of these rectangles(a bit) operates as a switch - the value can be 1, or it can be switched to 0 (by clicking on them!).",
                    placement: "bottom"
                },
                {
                    element: "#tour-column-inputs",
                    title: "Thirdly...",
                    content: "When a 'bit' has the value 1, think of it as turned 'on', if it has the value 0, think of it as turned 'off'.",
                    placement: "bottom"
                },
                {
                    element: "#tour-column-bottom-inputs",
                    title: "Thirdly...",
                    content: "If a bit is 'on' the header value, shown at the top of each column, is added to the total. As you'd expect if a bit is 'off', the total value of the 8 bit byte doesn't change.",
                    placement: "bottom"
                },
                {
                    element: "#tour-column-summary",
                    title: "Finally",
                    content: "All of the bits that are turned on (value = 1) have their header values added together to essentially convert their value into a decimal value. Have a play around with the empty byte's and try to understand how it works. After you feel you have a good grasp of how it works, maybe try going through it without any help?",
                    placement: "right"
                }
            ]
        });

        // Initialize the tour
        tour.init();

        // Start the tour
        tour.start();
    });

    $scope.updateRowSummary = function (row) {
        if (row == "row1") {
            var total = 0;

            if ($scope.row1digit1 == true) total = total + 1;
            if ($scope.row1digit2 == true) total = total + 2;
            if ($scope.row1digit3 == true) total = total + 4;
            if ($scope.row1digit4 == true) total = total + 8;
            if ($scope.row1digit5 == true) total = total + 16;
            if ($scope.row1digit6 == true) total = total + 32;
            if ($scope.row1digit7 == true) total = total + 64;
            if ($scope.row1digit8 == true) total = total + 128;

            $scope.row1Summary = total;
        }

        if (row == "row2") {
            var total = 0;

            if ($scope.row2digit1 == true) total = total + 1;
            if ($scope.row2digit2 == true) total = total + 2;
            if ($scope.row2digit3 == true) total = total + 4;
            if ($scope.row2digit4 == true) total = total + 8;
            if ($scope.row2digit5 == true) total = total + 16;
            if ($scope.row2digit6 == true) total = total + 32;
            if ($scope.row2digit7 == true) total = total + 64;
            if ($scope.row2digit8 == true) total = total + 128;

            $scope.row2Summary = total;
        }

        if (row == "row3") {
            var total = 0;

            if ($scope.row3digit1 == true) total = total + 1;
            if ($scope.row3digit2 == true) total = total + 2;
            if ($scope.row3digit3 == true) total = total + 4;
            if ($scope.row3digit4 == true) total = total + 8;
            if ($scope.row3digit5 == true) total = total + 16;
            if ($scope.row3digit6 == true) total = total + 32;
            if ($scope.row3digit7 == true) total = total + 64;
            if ($scope.row3digit8 == true) total = total + 128;

            $scope.row3Summary = total;
        }

        if (row == "row4") {
            var total = 0;

            if ($scope.row4digit1 == true) total = total + 1;
            if ($scope.row4digit2 == true) total = total + 2;
            if ($scope.row4digit3 == true) total = total + 4;
            if ($scope.row4digit4 == true) total = total + 8;
            if ($scope.row4digit5 == true) total = total + 16;
            if ($scope.row4digit6 == true) total = total + 32;
            if ($scope.row4digit7 == true) total = total + 64;
            if ($scope.row4digit8 == true) total = total + 128;

            $scope.row4Summary = total;
        }

        if (row == "row5") {
            var total = 0;

            if ($scope.row5digit1 == true) total = total + 1;
            if ($scope.row5digit2 == true) total = total + 2;
            if ($scope.row5digit3 == true) total = total + 4;
            if ($scope.row5digit4 == true) total = total + 8;
            if ($scope.row5digit5 == true) total = total + 16;
            if ($scope.row5digit6 == true) total = total + 32;
            if ($scope.row5digit7 == true) total = total + 64;
            if ($scope.row5digit8 == true) total = total + 128;

            $scope.row5Summary = total;
        }
    };
}]);