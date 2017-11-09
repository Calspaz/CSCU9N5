binaryTestApp.controller('decimalTakeEasyTestController', ["$scope", "$location", "_toast", function ($scope, $location, _toast) {
    var row1digit1, row1digit2, row1digit3, row1digit4, row1digit5, row1digit6, row1digit7, row1digit8;
    var row2digit1, row2digit2, row2digit3, row2digit4, row2digit5, row2digit6, row2digit7, row2digit8;
    var row3digit1, row3digit2, row3digit3, row3digit4, row3digit5, row3digit6, row3digit7, row3digit8;
    var row4digit1, row4digit2, row4digit3, row4digit4, row4digit5, row4digit6, row4digit7, row4digit8;
    var row5digit1, row5digit2, row5digit3, row5digit4, row5digit5, row5digit6, row5digit7, row5digit8;
    var row1ExpectedAnswer, row2ExpectedAnswer, row3ExpectedAnswer, row4ExpectedAnswer, row5ExpectedAnswer;
    var row1Summary, row2Summary, row3Summary, row4Summary, row5Summary;
    var correct = 0;
    var correctArray;
    $scope.row1Summary = $scope.row2Summary = $scope.row3Summary = $scope.row4Summary = $scope.row5Summary = 0;
    $scope.row1ExpectedAnswer = 192;
    $scope.row2ExpectedAnswer = 96;
    $scope.row3ExpectedAnswer = 48;
    $scope.row4ExpectedAnswer = 24;
    $scope.row5ExpectedAnswer = 12;
    $scope.correctArray = [];
    $scope.row1digit1 = $scope.row1digit2 = $scope.row1digit3 = $scope.row1digit4 = $scope.row1digit5 = $scope.row1digit6 = $scope.row1digit7 = $scope.row1digit8 = false;
    $scope.row2digit1 = $scope.row2digit2 = $scope.row2digit3 = $scope.row2digit4 = $scope.row2digit5 = $scope.row2digit6 = $scope.row2digit7 = $scope.row2digit8 = false;
    $scope.row3digit1 = $scope.row3digit2 = $scope.row3digit3 = $scope.row3digit4 = $scope.row3digit5 = $scope.row3digit6 = $scope.row3digit7 = $scope.row3digit8 = false;
    $scope.row4digit1 = $scope.row4digit2 = $scope.row4digit3 = $scope.row4digit4 = $scope.row4digit5 = $scope.row4digit6 = $scope.row4digit7 = $scope.row4digit8 = false;
    $scope.row5digit1 = $scope.row5digit2 = $scope.row5digit3 = $scope.row5digit4 = $scope.row5digit5 = $scope.row5digit6 = $scope.row5digit7 = $scope.row5digit8 = false;
    $scope.selectedClass = false;

    $(document).ready(function () {
        $('.tooltipped').tooltip({ delay: 50 });
        _toast.info("Switch the binary values from 0 to 1 to get the expected decimal value shown on the right. Once you're ready, submit your answers. Good luck!");
        $('#correctAnswersModal').modal();
    });

    $scope.updateStyle = function () {
        $scope.selectedClass = $scope.selectedClass === false ? true : false;
    };

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

    $scope.checkAnswers = function () {
        $scope.correctArray = [];
        correct = 0;

        var row1total = 0;
        if ($scope.row1digit1 == true) row1total = row1total + 1;
        if ($scope.row1digit2 == true) row1total = row1total + 2;
        if ($scope.row1digit3 == true) row1total = row1total + 4;
        if ($scope.row1digit4 == true) row1total = row1total + 8;
        if ($scope.row1digit5 == true) row1total = row1total + 16;
        if ($scope.row1digit6 == true) row1total = row1total + 32;
        if ($scope.row1digit7 == true) row1total = row1total + 64;
        if ($scope.row1digit8 == true) row1total = row1total + 128;
        $scope.row1Summary = row1total;
        if ($scope.row1Summary == $scope.row1ExpectedAnswer) {
            correct++;
        }

        var row2total = 0;
        if ($scope.row2digit1 == true) row2total = row2total + 1;
        if ($scope.row2digit2 == true) row2total = row2total + 2;
        if ($scope.row2digit3 == true) row2total = row2total + 4;
        if ($scope.row2digit4 == true) row2total = row2total + 8;
        if ($scope.row2digit5 == true) row2total = row2total + 16;
        if ($scope.row2digit6 == true) row2total = row2total + 32;
        if ($scope.row2digit7 == true) row2total = row2total + 64;
        if ($scope.row2digit8 == true) row2total = row2total + 128;
        $scope.row2Summary = row2total;
        if ($scope.row2Summary == $scope.row2ExpectedAnswer) {
            correct++;
        }

        var row3total = 0;
        if ($scope.row3digit1 == true) row3total = row3total + 1;
        if ($scope.row3digit2 == true) row3total = row3total + 2;
        if ($scope.row3digit3 == true) row3total = row3total + 4;
        if ($scope.row3digit4 == true) row3total = row3total + 8;
        if ($scope.row3digit5 == true) row3total = row3total + 16;
        if ($scope.row3digit6 == true) row3total = row3total + 32;
        if ($scope.row3digit7 == true) row3total = row3total + 64;
        if ($scope.row3digit8 == true) row3total = row3total + 128;
        $scope.row3Summary = row3total;
        if ($scope.row3Summary == $scope.row3ExpectedAnswer) {
            correct++;
        }

        var row4total = 0;
        if ($scope.row4digit1 == true) row4total = row4total + 1;
        if ($scope.row4digit2 == true) row4total = row4total + 2;
        if ($scope.row4digit3 == true) row4total = row4total + 4;
        if ($scope.row4digit4 == true) row4total = row4total + 8;
        if ($scope.row4digit5 == true) row4total = row4total + 16;
        if ($scope.row4digit6 == true) row4total = row4total + 32;
        if ($scope.row4digit7 == true) row4total = row4total + 64;
        if ($scope.row4digit8 == true) row4total = row4total + 128;
        $scope.row4Summary = row4total;
        if ($scope.row4Summary == $scope.row4ExpectedAnswer) {
            correct++;
        }

        var row5total = 0;
        if ($scope.row5digit1 == true) row5total = row5total + 1;
        if ($scope.row5digit2 == true) row5total = row5total + 2;
        if ($scope.row5digit3 == true) row5total = row5total + 4;
        if ($scope.row5digit4 == true) row5total = row5total + 8;
        if ($scope.row5digit5 == true) row5total = row5total + 16;
        if ($scope.row5digit6 == true) row5total = row5total + 32;
        if ($scope.row5digit7 == true) row5total = row5total + 64;
        if ($scope.row5digit8 == true) row5total = row5total + 128;
        $scope.row5Summary = row5total;
        if ($scope.row5Summary == $scope.row5ExpectedAnswer) {
            correct++;
        }
        $scope.correct = correct;

        for (var i = 0; i < correct; i++) {
            $scope.correctArray.push(i);
        }

        $scope.openAnswersModal(correct);
    };

    $scope.openAnswersModal = function (correctAnswers) {
        $('#correctAnswersModal').modal('open');
    };

    $scope.dismissAnswersModal = function() {
        $('#correctAnswersModal').modal('close');
    };
}]);