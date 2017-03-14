
var MainModule = angular.module('MainModule', ['ngRoute']);

MainModule.config(function ($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: '../templates/main.html',
            controller: 'controllers/mainController',

        })

        .when('/login', {
            templateUrl: '../templates/login.html',
            controller: 'controllers/mainController'
        })

        .when('/about', {
            templateUrl: '../templates/about.html',
            controller: 'controllers/mainController'
        })

        .when('/in', {
            templateUrl: '../templates/main.html',
            controller: 'controllers/InController',

        })

        .when('/in/products', {
            templateUrl: '../templates/in/list.html',
            controller: 'controllers/productsController'
        })

        .when('/in/exit', {
            templateUrl: '../templates/in/exit.html',
            controller: 'controllers/InController'
        })

        .when('/in/clients', {
            templateUrl: '../templates/in/list.html',
            controller: 'controllers/ClientController'
        })

});

var AuthModule = angular.module('AuthModule', []);