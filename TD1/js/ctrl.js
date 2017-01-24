/**
 * Created by Erwan on 24/01/2017.
 */
app.controller("ctrlName",["$cookies",function($cookies){
    // Retrieving a cookie
    var favoriteCookie = $cookies.get('myFavorite');
    // Setting a cookie
    $cookies.put('myFavorite', 'oatmeal');
}]);