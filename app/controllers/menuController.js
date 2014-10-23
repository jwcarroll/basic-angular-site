/**
 * Created by Josh on 7/8/14.
 */
(function () {
  'use strict';

  var MenuCtrl = function ($location) {
    this.$location = $location;
    this.menu = [
      {
        'title': 'Hello World',
        'link': '/'
      }
    ];
  };

  MenuCtrl.$inject = ['$location'];

  angular.extend(MenuCtrl.prototype, {
    isActive: function (route) {
      return route === this.$location.path();
    }
  });

  angular.module('myApp')
    .controller('MenuCtrl', MenuCtrl);

}());