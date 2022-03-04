'use strict';

angular.module('myApp.listView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'list-view/list-view.html',
    controller: 'ListViewCtrl'
  });
}])

.controller('ListViewCtrl', ['CharactersApi', '$scope', '$location', function(charactersApi, $scope, $location) {

  init();

  function init() {
    
    $scope.currentPage = 1;

    getList();

  };

  function getList() {

    let offset = ($scope.currentPage - 1) * 20;

    charactersApi.getAll(offset).then(response => {

      $scope.list = response.data.results;
      console.log(response);

      $scope.totalItems = response.data.total;

      if ($scope.currentPage != $scope.totalPages) {
        $scope.totalPages = Math.ceil(response.data.total / response.data.count);
      }
      
      $scope.$apply();

    });

  }

  $scope.goPreviousPage = function() {
    
    if ($scope.currentPage > 1) {
      $scope.currentPage--;
      getList();
    }
    
  }

  $scope.goNextPage = function() {
    
    if ($scope.currentPage <= $scope.totalPages) {
      $scope.currentPage++;
      getList();
    }
    
  }

  $scope.onChangePage = function() {
    
    getList();

  }

  $scope.getPages = function() {

    let pages = [];

    for(let i=1; i <= $scope.totalPages; i++) {
      pages.push(i);
    }

    return pages;

  }

  $scope.onClick = function(heroId) {

    $location.path('/detail/' + heroId);

  }

  $scope.getImageURL = function(heroData) {
    if (heroData) {
      return heroData.thumbnail.path + '.' + heroData.thumbnail.extension;
    }
  }

}]);