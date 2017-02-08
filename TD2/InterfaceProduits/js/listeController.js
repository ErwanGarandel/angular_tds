/**
 * Created by Erwan on 07/02/2017.
 */
var app = angular.module("serviceApp",[]);
app.controller("ListeController", function(){
    var self = this;
    this.produits=
        [
        {
            "url": "http://tutorialzine.com/2013/07/50-must-have-plugins-for-extending-twitter-bootstrap/",
            "title": "50 Must-have plugins for extending Twitter Bootstrap",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/07/featured_4-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/08/simple-registration-system-php-mysql/",
            "title": "Making a Super Simple Registration System With PHP and MySQL",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/08/simple_registration_system-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/08/slideout-footer-css/",
            "title": "Create a slide-out footer with this neat z-index trick",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/08/slide-out-footer-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/06/digital-clock/",
            "title": "How to Make a Digital Clock with jQuery and CSS3",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/06/digital_clock-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/05/diagonal-fade-gallery/",
            "title": "Smooth Diagonal Fade Gallery with CSS3 Transitions",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/05/featured-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/05/mini-ajax-file-upload-form/",
            "title": "Mini AJAX File Upload Form",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/05/ajax-file-upload-form-100x100.jpg"
        },
        {
            "url": "http://tutorialzine.com/2013/04/services-chooser-backbone-js/",
            "title": "Your First Backbone.js App – Service Chooser",
            "image": "http://cdn.tutorialzine.com/wp-content/uploads/2013/04/service_chooser_form-100x100.jpg"
        }
    ];
    this.items = this.dispoItems;
    this.includedItems=[];
    this.selectedDispoItems=[];
    this.selectedIncludedItems=[];
    this.step = 1;

    this.addToInclude = function () {
        for(var j=0;self.selectedDispoItems.length;j++) {
            self.includedItems.push(self.selectedDispoItems[j]);

        for(var i =0;i < self.selectedDispoItems.length;i++) {
            var y = self.items.indexOf(self.selectedDispoItems[i]);
            self.item.splice(y, 1);
        }
        self.selectedDispoItems=[];
        }
    };

    this.addAllToInclude = function (){
        for(var i =0;self.items.length;i++) {
            self.includedItems.push(self.items[i]);
        }
        self.items = [];
    };

    this.removeFromInclude = function () {
        for(var j=0;self.selectedDispoItems;j++) {
            self.includedItems.push(self.selectedIncludedItems[j]);
        }
        for(var i =0;i < self.selectedDispoItems.length;i++) {
            var y = self.items.indexOf(self.selectedDispoItems[i]);
            self.item.splice(y, 1);
        }
        self.selectedDispoItems=[];
    };

    this.removeAllFromInclude = function () {
        self.items = self.dispoItems;
        self.includedItems = [];
    };
});