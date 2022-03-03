'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['CharactersApi', function(charactersApi) {

  teste();

  function teste() {
    
    charactersApi.getAll().then(response => {
                console.log(response)
            });

  };

}]);