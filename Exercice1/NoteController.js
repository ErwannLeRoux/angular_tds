/**
 * Created by Erwann on 24/01/2017.
 */
var myApp = angular.module('Note',['ngCookies']);

myApp.controller('NoteController', ["$cookies",function() {
    var self=this;
    this.message = "";

    this.save = function(message) {
        // Setting a cookie
        $cookies.put('Exercice1',message);
    };
    this.count = function() {
        var res = (100 - self.message.length);
        return res;
    };

    this.clear = function(value) {

    };
}]);