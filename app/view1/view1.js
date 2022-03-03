'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['CharactersApi', '$scope', '$location', function(charactersApi, $scope, $location) {

  $scope.title = 'teste!';

  init();

  function init() {
    getList();
  };

  function getList() {

    charactersApi.getAll().then(response => {
      $scope.list = response.data.results;
      console.log(response);
      console.log($scope.title);
      $scope.$apply();
    });

  }

  $scope.onClick = function(heroId) {


    $location.path('/view2/' + heroId);

  }

}]);