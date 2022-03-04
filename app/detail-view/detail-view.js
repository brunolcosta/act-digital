'use strict';

angular.module('myApp.detailView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/detail/:heroid', {
    templateUrl: 'detail-view/detail-view.html',
    controller: 'DetailViewCtrl'
  });
}])

.controller('DetailViewCtrl', ['$routeParams', 'CharactersApi', '$scope', function($routeParams, charactersApi, $scope) {

  let heroId = $routeParams.heroid;

  init();

  function init() {

    getHeroDetail();

  };

  function getHeroDetail() {

    charactersApi.get(heroId).then(response => {
      $scope.heroDetails = response.data.results[0];
      console.log($scope.heroDetails);
      $scope.$apply();
    });

  }

  $scope.getImageURL = function() {

    if ($scope.heroDetails) {
      return $scope.heroDetails.thumbnail.path + '.' + $scope.heroDetails.thumbnail.extension;
    }
    
  }

  $scope.backHistory = function() {
    history.back();
  }

}]);