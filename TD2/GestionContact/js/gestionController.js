/**
 * Created by Erwan on 14/02/2017.
 */
var gestion = angular.module("gestionContact", []);
gestion.controller("gestionController", function($scope){
    var self = this;

    $scope.tableauNom=
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
    //$scope.identite = $scope.tableauNom;
    this.includedItems=[];
});