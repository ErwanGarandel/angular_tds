/**
 * Created by Erwan on 31/01/2017.
 */
var app = angular.module('myApp',[]);

app.controller('serviceController', ["$scope","$filtre", "$http", function($scope, $filtre, $http) {

    $scope.services =  [
        {
            "name": "Web Development",
            "price": 300,
            "active": true
        }, {
            "name": "Design",
            "price": 400,
            "active": false
        }, {
            "name": "Integration",
            "price": 250,
            "active": false
        }, {
            "name": "Formation",
            "price": 220,
            "active": false
    }
    ];

    $scope.total = function(){
        var p = 0;
        var i = 0;
        for(var j=0; j<$scope.services.length;j++){
            if ($scope.services[j]["active"] == true) {
                i++;
                p = p + $scope.services[j]["price"];
            }
        }
        $scope.totValue = i;
        $scope.totPrice = p;
        $scope.prixFinal = $filtre('currency')($scope.totPrice);
    };

    $scope.toggleActive = function(){

    };

    //Réduction
    $scope.reductionValide = false;
    $scope.codeEntré = false;


    $http.get('../json/promo.json').success(function(data){
        $scope.codes= data;
    });

    $scope.calculerReduction = function(){
        $scope.remise = "Code promo Invalide";
        $scope.prixFinal = $filtre('currency')($scope.totPrice);
        if($scope.codes[$scope.codeEntré]){
            $scope.remiseNB = $scope.codes[$scope.codeSaisi]*$scope.totPrice;
            $scope.prixFinal = $filtre('currency')($scope.totPrice - $scope.remiseNB);
            $scope.remise = $filtre('currency')($scope.remiseNB);
        }
    };

    $scope.montrerCalculerReduction = function(){
        $scope.reductionValide = !$scope.reductionValide;
        $scope.calculerReduction();
    }
}]);

