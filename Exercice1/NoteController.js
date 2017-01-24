/**
 * Created by Erwann on 24/01/2017.
 */
var myApp = angular.module('Note',['ngCookies']);

myApp.controller('NoteController', ["$cookies",function($cookies) {
    var self=this;
    this.message = "";

    this.save = function() {
        // Setting a cookie
        var favoriteCookie = $cookies.get('monCookie');
        // Setting a cookie
        $cookies.put('monCookie', self.message);
    };
    this.count = function() {
        var res = (100 - self.message.length);
        return res;
    };

    this.clear = function(value) {

    };
}]);