/**
 * Created by Erwan on 07/03/2017.
 */
angular.module("App").config(["$routeProvider",function($routeProvider) {
    $routeProvider.when('/page1', {
        controller: 'AppController',
        templateUrl: 'templates/main.html'
    }).when('/page2', {
        controller: 'App2Controller',
        templateUrl: 'templates/main.html'
    }).otherwise({
        redirectTo: '/page1'
    });
}]);