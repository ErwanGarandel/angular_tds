/**
 * Created by Erwan on 14/02/2017.
 */
var gestion = angular.module("gestionContact", []);
gestion.controller("gestionController", function($scope){
    var self = this;


    $scope.tabContacts=
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

/*
    .factory('ContactService', [function () {
        var factory = {};

        factory.getContacts = function () {
            return tableauNom;
        };

        return factory;
    }]);
*/
    $scope.removeContact = function (item) {
        var index = $scope.tabContacts.indexOf(item);
        $scope.tabContacts.splice(index, 1);
        $scope.removed = 'Contact supprimé avec succès.';
    };
/*
    $scope.cancelRemove = function (item) {
        var index = $scope.tabContacts.indexOf(item);
        $scope.tabContacts.splice(index, 1);
        $scope.cancel = 'Contact désupprimé avec succès.';
    };
*/
    $scope.resetTableau = function() {
        location.reload();
    };

});