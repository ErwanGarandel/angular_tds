/**
 * Created by Erwan on 24/01/2017.
 */
var myApp = angular.module('myApp',[]);

myApp.controller('GotoController', [ '$scope','$window',function($scope,win) {
    $scope.location="http://www.google.fr";
    $scope.go=function(){win.location=$scope.location;};
} ]);