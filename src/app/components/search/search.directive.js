(function() {
  'use strict';

  angular
    .module('ngYo')
    .directive('search', search);

  /** @ngInject */
  function search() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/search/search.html',
      scope: {
          creationDate: '='
      },
      controller: searchController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function searchController(moment) {
      var vm = this;
      vm.label = "search";
      // "vm.creationDate" is available by directive option "bindToController: true"
      vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
