/**
 * Created by Erwan on 27/01/2017.
 */
var myApp = angular.module('myApp',[]);

    myApp.controller('ControllerPrincipalMyApp', [function(){
    this.messageNote="";
    this.info = "";
    this.status="";
    this.save = function(){
        this.info="Note sauvegardée";
    };
    this.reset = function(){
        this.messageNote="";
        this.info="";
    };
    this.count = function(){
        var nb= 100 - this.messageNote.length;
        if(nb<50 && nb>=20)
            this.status="alert-warning";
        else if(nb<20)
            this.status="alert-danger";
        else
            this.status="alert-info"

        return nb;

    };
}]);
