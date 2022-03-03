'use strict';

angular.module('myApp.listView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'list-view/list-view.html',
    controller: 'ListViewCtrl'
  });
}])

.controller('ListViewCtrl', ['CharactersApi', '$scope', '$location', function(charactersApi, $scope, $location) {

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


    $location.path('/detail/' + heroId);

  }

}]);