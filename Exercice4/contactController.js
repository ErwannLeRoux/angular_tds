var myApp = angular.module('Contact',[]);

myApp.controller('contactController', [function() {

    var self=this;

    //Tableau de contacts
    this.contacts = [
        {
            "name" : "ZUCKERBERG",
            "firstname" : "Mark",
            "email" : "mark@facebook.com"
        },
        {
            "name" : "GATES",
            "firstname" : "Bill",
            "email" : "bill@microsoft.com"
        },
        {
            "name" : "JOBS",
            "firstname" : "Steeve",
            "email" : "steeve@apple.com"
        }
    ];

    //Contact à modifier
    this.contact = null;

    //Contact modifié par le formulaire
    this.tmpContact = null;

    this.operation = "";

    this.edit = false;

    this.toUpdate = function(contact)
    {

    };

    this.toAdd = function ()
    {
        self.edit = true;
    }

    this.add = function()
    {

    }

    this.update = function()
    {

    }

    this.delete = function(contact)
    {

    }


}]);