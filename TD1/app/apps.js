/**
 * Created by Erwan on 24/01/2017.
 */
var myApp = angular.module('myApp', ['ngCookies']);

myApp.service('browser', [ '$window', function($window) {

    this.get= function() {

        var userAgent = $window.navigator.userAgent;
        var browsers = {
            chrome : /chrome/i,
            safari : /safari/i,
            firefox : /firefox/i,
            ie : /internet explorer|.net/i
        };

        for ( var key in browsers) {
            if (browsers[key].test(userAgent)) {
                return key;
            }
        };
        return 'Navigateur inconnu';
    };

} ]);


myApp.controller('BrowserController', [ '$scope','browser',function($scope,browser) {
    $scope.navigateur= browser.get();
} ]);

myApp.controller('GotoController', [ '$scope','$window',function($scope,win) {
    $scope.location="http://www.google.fr";
    $scope.go=function(){win.location=$scope.location;};
} ]);