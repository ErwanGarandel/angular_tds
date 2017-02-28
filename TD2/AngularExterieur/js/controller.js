/**
 * Created by Erwan on 21/02/2017.
 */
var app = angular.module("app", ["ngAnimate"]);
app.factory("contacts", function () {
    return [
        {"firstName" : "Angelica", "lastName": "Britt", "phone": "0645651245"},
        {"firstName" : "test", "lastName": "test", "phone": "0645651245"},
        {"firstName" : "test", "lastName": "test", "phone": "0645651245"},
        {"firstName" : "test", "lastName": "test", "phone": "0645651245"},
        {"firstName" : "Angelica", "lastName": "Britt", "phone": "0645651245"}
    ];

});

app.controller("AppCtrl", function(contacts) {
    this.contacts = contacts;
    this.selectedContact = null;
    this.contactCopy = null;

    this.selectedContact = function(contact) {
        this.selectedContact = contact;
        this.contactCopy = angular.copy(contact);
    };

    this.saveContact = function() {
        this.selectedContact.firstName = this.contactCopy.firstName;
    }
}
);