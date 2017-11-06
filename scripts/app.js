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
    otherwise({
        redirectTo: '/'
    });
});

