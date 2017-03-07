/**
 * Created by Erwan on 07/03/2017.
 */
angular.module("App").directive("dirClient", function() {
    return {
        template : "<div>Client : {{client}}</div>"
    };
})