/**
 * Created by Josh on 10/23/2014.
 */
(function () {
  'use strict';

  function HelloWorldService($q, $timeout){
    this.$q = $q;
    this.$timeout = $timeout;
  }

  HelloWorldService.$inject = ['$q', '$timeout'];

  HelloWorldService.prototype = {
    getMessage:function(){
      var def = this.$q.defer();

      this.$timeout(function(){
        def.resolve('Angular Is Awesome!!');
      }, 200);

      return def.promise;
    }
  };

  angular.module('myApp')
    .service('helloWorldService', HelloWorldService);

}());