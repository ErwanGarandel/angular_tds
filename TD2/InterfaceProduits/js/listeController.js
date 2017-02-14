/**
 * Created by Erwan on 07/02/2017.
 */
var app = angular.module("app",[]);
app.controller("ListeController", function(){
    var self = this;
    this.dispoItems=
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
    this.items=this.dispoItems;
    this.includedItems=[];
    this.selectedDispoItems=[];
    this.selectedIncludedItems=[];
    this.step=1;

    this.addToIncluded=function(){
        for(var i=0;i<self.selectedDispoItems.length;i++)
            self.includedItems.push(self.selectedDispoItems[i]);

        for(var x=0;x<self.selectedDispoItems.length;x++){
            var y=self.items.indexOf(self.selectedDispoItems[x]);
            self.items.splice(y,1);
        }
        self.selectedDispoItems=[];
    };

    this.addAllToIncluded=function(){
        for(var i=0;i<self.items.length;i++)
            self.includedItems.push(self.items[i])
        self.items=[];
    };

    this.removeFromIncluded=function(){
        for(var i=0;i<self.selectedIncludedItems.length;i++)
            self.items.push(this.selectedIncludedItems[i]);

        for(var x=0;x<self.selectedIncludedItems.length;x++){
            var y=self.includedItems.indexOf(self.selectedIncludedItems[x]);
            self.includedItems.splice(y,1);
        }
        self.selectedIncludedItems=[];
    };

        for(var i=0;i<self.includedItems.length;i++)
            self.items.push(self.includedItems[i])
        self.includedItems=[];
    };
});