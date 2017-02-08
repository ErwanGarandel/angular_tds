/**
 * Created by Erwan on 06/02/2017.
 */
var app = angular.module("ServicesApp",[]);

app.controller("ServicesController" , [ "$scope","$http","$filter", function($scope,$http,$filter) {
    $scope.totValue = 1;
    $scope.totPrice = 300;
    $scope.services = [
        {
            "name": "Web Development",
            "price": 300,
            "active":true
        },{
            "name": "Design",
            "price": 400,
            "active":false
        },{
            "name": "Integration",
            "price": 250,
            "active":false
        },{
            "name": "Formation",
            "price": 220,
            "active":false
        }
    ];

    $scope.total = function(){
        var i = 0;
        var p = 0;
        for(var j=0; j<$scope.services.length ; j++){
            if($scope.services[j]["active"]===true){
                i++;
                p = p + $scope.services[j]["price"];
            }
        }
        $scope.totValue = i ;
        $scope.totPrice = p;
        $scope.prixFinal = $filter('currency')($scope.totPrice);
    };

    $scope.toggleActive = function(){

    };

    // GESTION DES REDUCTIONS
    $scope.reductionValide = false;
    $scope.codeSaisi; //ce qui est affiché par defaut, ici rien


    //noinspection JSUnresolvedFunction
    $http.get('../JSON/promo.json').success(function(data) {
        $scope.codes = data;
    });

    $scope.calculReduction = function(){
        $scope.remise="Code promo invalide";
        $scope.prixFinal =  $filter('currency')($scope.totPrice);
        if($scope.codes[$scope.codeSaisi]){
            $scope.remiseNB = $scope.codes[$scope.codeSaisi]*$scope.totPrice;
            $scope.prixFinal = $filter('currency')($scope.totPrice - $scope.remiseNB);
            $scope.remise = $filter('currency')($scope.remiseNB);
        }
    };

    $scope.MontrerCalculReduction = function(){
        $scope.reductionValide = !$scope.reductionValide;
        $scope.calculReduction();
    }

}]);