var services = angular.module('AuthService', []);

services.factory('AuthService', function() {

    var self = this;

    this.users = [
        "admin","jean"
    ];

    this.activeUser;

    this.checkLogin = function ($login) {
        
    }
    
    this.isAuth = function () {
        
    }
});