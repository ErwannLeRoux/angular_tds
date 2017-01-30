/**
 * Created by Erwann on 24/01/2017.
 */
var myApp = angular.module('Note',['ngCookies']);

myApp.controller('NoteController', ["$cookies",function($cookies) {
    var self=this;

    var favoriteCookie = $cookies.get('monCookie');

    this.message = favoriteCookie;
    //0 -> initial , 1 -> modifiée, 2 -> sauvegardée
    this.status = 1;
    this.info = "";


    this.save = function() {
        if(self.message != "")
        {
            // Setting a cookie
            $cookies.put('monCookie', self.message);
            self.info="Note sauvegardée";
            self.status=2;
        }

    };
    this.count = function() {
        var res = (100 - self.message.length);
        if(res == 100)
            self.status = 1;
        return res;
    };

    this.clear = function(value) {
        self.message ="";
        self.status = 1;
    };

    this.change = function(){
        self.status = 0;
        self.info = "Note modifiée";
    }

}]);