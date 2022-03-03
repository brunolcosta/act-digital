'use strict';

angular.module('myApp.detailView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/detail/:heroid', {
    templateUrl: 'detail-view/detail-view.html',
    controller: 'DetailViewCtrl'
  });
}])

.controller('DetailViewCtrl', [function() {

}]);