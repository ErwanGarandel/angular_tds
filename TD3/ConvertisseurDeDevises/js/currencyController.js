/**
 * Created by Erwan on 28/02/2017.
 */
angular.module('currencyApp',[]).controller("currencyController",['$http', function($http){
    var self = this;
    this.currencies;
    this.from = "EUR";
    this.to = "USD";
    this.what = 1;
    this.result;
    this.historique = false;

    $http.get('../app/data/currencymap.json').then(successCallback, errorCallback);

    function successCallback(response, status, headers, config){
        self.currencies = response.data;
    }
    function errorCallback(error, status, headers, config){
        console.log("Erreur avec le statut Http : "+error.status);
    }

    this.swap = function (){
        var tmp = self.from;
        self.from = self.to;
        self.to = tmp;
    };

    this.getResult = function(){

    };

}]);
