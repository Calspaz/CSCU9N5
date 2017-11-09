var binaryTestApp = angular.module('binaryCourseApplication', ['ngRoute', 'ngAnimate']);

binaryTestApp.config(function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController'
    }).
    when('/Theory', {
        templateUrl: 'views/theory.html',
        controller: 'theoryController'
    }).
    when('/DecimalTheory', {
        templateUrl: 'views/decimalTheory.html',
        controller: 'decimalTheoryController'
    }).
    when('/RefreshChoices', {
        templateUrl: 'views/refreshChoices.html',
        controller: 'refreshChoicesController'
    }).
    when('/DecimalRefresh', {
        templateUrl: 'views/decimalRefresh.html',
        controller: 'decimalRefreshController'
    }).
    when('/TestChoices', {
        templateUrl: 'views/testChoices.html',
        controller: 'testChoicesController'
    }).
    when('/DecimalTakeTest', {
        templateUrl: 'views/decimalTakeTest.html',
        controller: 'decimalTakeTestController'
    }).
    when('/DecimalTakeEasyTest', {
        templateUrl: 'views/decimalTakeEasyTest.html',
        controller: 'decimalTakeEasyTestController'
    }).
    when('/DecimalTakeHardTest', {
        templateUrl: 'views/decimalTakeHardTest.html',
        controller: 'decimalTakeHardTestController'
    }).
    otherwise({
        redirectTo: '/'
    });
});

