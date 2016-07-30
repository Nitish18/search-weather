(function() {
  'use strict';

  angular
    .module('ngYo')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('search', {
        url: '/search',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('/', {
        url: '/',
        templateUrl: 'app/search/search.html',
        controller: 'SearchController',
        controllerAs: 'vm'
      });


    $urlRouterProvider.otherwise('/');
  }

})();
