(function() {
  'use strict';

  angular
    .module('ngYo')
    .factory('store', store);

  /** @ngInject */
  function store($window) {
    var store = {};

    store.set = function(key, value) {
     $window.localStorage[key] = value;
    };

   store.get = function(key, defaultValue) {
     return $window.localStorage[key] || defaultValue;
   };

   store.setObject = function(key, value) {
     $window.localStorage[key] = JSON.stringify(value);
   };

   store.getObject = function(key) {
     return JSON.parse($window.localStorage[key] || '{}');
   }

   return store;
  }
})();
