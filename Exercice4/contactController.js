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
    this.tmpContact = {"name" : "", "firstname": "","email":""};

    this.operation = "";

    this.edit = false;

    this.toUpdate = function(contact)
    {

    };

    this.toAdd = function ()
    {
        self.edit = true;
        self.operation = "add";
        console.log("toAdd");

    }

    this.add = function()
    {
        console.log("add");
        self.contacts.push(self.tmpContact);
        self.tmpContact = {"name" : "", "firstname": "","email":""};

    }

    this.update = function()
    {
        console.log("Update");
        if(self.operation == "add")
        {
            self.add();
        }
    }

    this.delete = function(contact)
    {
        console.log("On remove");

        var indexItem = self.contacts.indexOf(contact);

        self.contacts.splice(indexItem, 1);
    }


}]);