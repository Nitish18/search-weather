(function() {
  'use strict';

  angular
    .module('ngYo')
    .factory('api', api);

  /** @ngInject */
  function api($http, $log) {
    var api = {};

    api.get = function (url) {
      return $http({
        method: 'GET',
        url: url ,

      })
    }
   return api;
  }
})();
