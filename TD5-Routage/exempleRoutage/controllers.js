/**
 * Created by Erwan on 14/03/2017.
 */
angular.module("sampleApp").controller("RouteController",["$routeParams", function($routeParams){
    this.content1="Contenu du template de route1";
    // this.content2="Contenu du template de route2";
    this.params=$routeParams;
}]);