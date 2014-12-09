(function () {
 
    var app = angular.module('chuckNoris', []);

    app.controller('ChuckNorrisCrtl', function ($interval, $http) {

        var self = this;

        this.getRandomJoke = function() 
        {
            $http.get('http://api.icndb.com/jokes/random').success(function(data) {
                self.joke = data.value.joke;
            });
        };
      
        $interval(function () {
            self.getRandomJoke();
        }, 5000);

        this.getRandomJoke();

    });

})();