/**
 * Created by Erwan on 06/03/2017.
 */
currencyApp.controller('CurrencyController',['$http','$sce', function($http,$sce) {

    var self = this;
    this.currencies;
    this.what = 1;
    this.from = "EUR";
    this.to = "USD";
    this.result;
    this.historique = false;
    this.histo1={};

    $http.get('app/data/currencymap.json').
    then(function(response){
        self.currencies = response.data;
    });

    this.getResult = function(){
        url = $sce.trustAsResourceUrl('https://free.currencyconverterapi.com/api/v3/convert?compact=y&q='+self.from+'_'+self.to);
        $http.jsonp(url, {jsonCallbackParam: 'callback'}).
        then(function(result){
            if(!jQuery.isEmptyObject(result.data)) {
                console.log(result.data);
                this.val = result.data[self.from + '_' + self.to].val;
                self.result = val * self.what;
                if(self.historique === true){
                    console.log("interieur");
                    var conversion={
                        from : self.from,
                        to : self.to,
                        amount : function(){ return self.what*this.rate},
                        initialAmount : function(){ return self.what*this.initialRate},
                        delta : 0,
                        rate : val,
                        what : self.what,
                        date : new Date(),
                        update: false,
                        initialRate : val
                    };
                    var key=self.from+self.to;
                    if(self.histo1[key]){
                        var oldConversion=self.histo1[key];
                        oldConversion.what=self.what;
                        conversion.delta=conversion.amount()-oldConversion.initialAmount();
                        conversion.initialRate=oldConversion.initialRate;
                    }
                    conversion.update=false;
                    self.histo1[key]=conversion;
                }
            }
            else
                alert('Erreur lors de la conversion');
        });
    }

    this.swap = function(){
        var temp = self.from;
        self.from = self.to;
        self.to = temp;
    }
}]);