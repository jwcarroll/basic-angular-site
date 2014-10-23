/**
 * Created by Josh on 10/23/2014.
 */
(function () {
  'use strict';

  function HelloWorldCtrl(helloWorldService){
    this.helloWorldService = helloWorldService;
    this.init();
  }

  HelloWorldCtrl.$inject = ['helloWorldService'];

  HelloWorldCtrl.prototype = {
    init:function(){
      var _this = this;

      _this.helloWorldService.getMessage()
        .then(function(msg){
          _this.message = msg;
        })
    }
  };

  angular.module('myApp')
    .controller('helloWorldCtrl', HelloWorldCtrl);

}());