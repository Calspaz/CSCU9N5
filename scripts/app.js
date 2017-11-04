var binaryTestApp = angular.module('binaryCourseApplication', ['ngRoute', 'chart.js']);

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
    otherwise({
        redirectTo: '/'
    });
});

