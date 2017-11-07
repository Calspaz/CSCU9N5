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
    when('/CreateChat', {
        templateUrl: 'views/createChats.html',
        controller: 'createChatController'
    }).
    when('/BinaryTest', {
        templateUrl: 'views/binaryTest.html',
        controller: 'binaryTestController'
    }).
    when('/BinaryTakeTest', {
        templateUrl: 'views/takeTest.html',
        controller: 'binaryTakeTestController'
    }).
    when('/TakeEasyTest', {
        templateUrl: 'views/takeEasyTest.html',
        controller: 'binaryTakeEasyTestController'
    }).
    when('/TakeMediumTest', {
        templateUrl: 'views/takeMediumTest.html',
        controller: 'binaryTakeMediumTestController'
    }).
    when('/TakeHardTest', {
        templateUrl: 'views/takeHardTest.html',
        controller: 'binaryTakeHardTestController'
    }).
    otherwise({
        redirectTo: '/'
    });
});

