/**
 * Created by Erwan on 14/02/2017.
 */
var gestion = angular.module("gestionContact", []);
gestion.controller("gestionController", function($scope){
    var self = this;


    $scope.tabContacts =
        [
            {
                "name" : "ZUCKERBERG",
                "surname" : "mark",
                "mail" : "mark@facebook.com"
            },
            {
                "name" : "GATES",
                "surname" : "bill",
                "mail" : "bill@microsoft.com"
            },
            {
                "name" : "JOBS",
                "surname" : "steeve",
                "mail" : "steeve@apple.com"
            }
        ];
    $scope.contact;
    $scope.operation = "";
   /*
   0 -> rien
   1 -> edit
   2 -> add
    */
   $scope.edit = 0;

    $scope.removeContact = function (item) {
        var index = $scope.tabContacts.indexOf(item);
        $scope.tabContacts.splice(index, 1);
        $scope.removed = 'Contact supprimé avec succès.';
    };

    $scope.cancelRemove = function () {
        angular.forEach(self.tabContacts, function(contact){
            if(contact.deleted)
                contact.deleted = false;
        })
    };

    $scope.resetTableau = function() {
        location.reload();
    };

    /*-------------------------------------*/
/*
    this.addContact = function () {
        self.contact = null;
        self.tmpContact = angular.copy(contact);
        self.operation = "Contact ajouté avec succès.";
    };

    this.updateContact = function() {
        angular.forEach(self.contacts, function (contact) {
        self.edit=1;
        self.operation = "Contact modifié avec succès.";
        })
    };

    this.update = function(){
        if(self.contact != null){
            var index = self.contacts.indexOf(self.contact);
            self.contacts[index] = self.tmpContact;
            console.log(index);
            self.edit = 0;
        }else
        {
            self.contacts.push(self.tmpContact);
        }
    };

    */
});