/**
 * Created by Erwan on 31/01/2017.
 */
var myApp = angular.module('myApp',[]);

myApp.controller('serviceController', function() {
    this.totValue = 1;
    this.totPrice = 300;
    this.services =  [
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

    this.total = function(){
        var p;
        var i =0;
        for(var j=0; j< this.services.length ;j++){
            if (this.services[j]["active"] == true) i++;
            p = p + this.services[j]["price"];
        }
        this.totValue = i;
        this.totPrice = p;
    };

    this.toggleActive = function(){

    };
});

