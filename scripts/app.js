var binaryTestApp = angular.module('binaryCourseApplication', ['ngRoute']);

binaryTestApp.config(function($routeProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeController', 
    }).
    when('/Help', {
        templateUrl: 'views/help.html',
        controller: 'helpController'
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

