/**
 * Created by Josh on 10/23/2014.
 */
(function () {
  'use strict';

  angular.module('myApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider){
      $routeProvider.when('/', {
        controller:'helloWorldCtrl',
        controllerAs:'ctrl',
        templateUrl:'views/hello-world.html'
      })
    }]);


}());