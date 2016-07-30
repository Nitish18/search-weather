(function() {
  'use strict';

  angular
    .module('ngYo')
    .controller('SearchController', SearchController);

  /** @ngInject */
  function SearchController($timeout, webDevTec, toastr, api, store) {
    var vm = this;

    vm.citySelected = citySelected;

    vm.searchHistory = store.getObject('history');

    // later on use google-places api to search city and get lat lon
    vm.cities = [ {"_id":707860,"name":"Hurzuf","country":"UA","coord":{"lon":34.283333,"lat":44.549999}},
                  {"_id":519188,"name":"Novinki","country":"RU","coord":{"lon":37.666668,"lat":55.683334}},
                  {"_id":1283378,"name":"Gorkhā","country":"NP","coord":{"lon":84.633331,"lat":28}},
                  {"_id":1270260,"name":"State of Haryāna","country":"IN","coord":{"lon":76,"lat":29}},
                  {"_id":708546,"name":"Holubynka","country":"UA","coord":{"lon":33.900002,"lat":44.599998}},
                  {"_id":1283710,"name":"Bāgmatī Zone","country":"NP","coord":{"lon":85.416664,"lat":28}},
                  {"_id":529334,"name":"Mar’ina Roshcha","country":"RU","coord":{"lon":37.611111,"lat":55.796391}},
                  {"_id":1269750,"name":"Republic of India","country":"IN","coord":{"lon":77,"lat":20}},
                  {"_id":1283240,"name":"Kathmandu","country":"NP","coord":{"lon":85.316666,"lat":27.716667}},
                  {"_id":703363,"name":"Laspi","country":"UA","coord":{"lon":33.733334,"lat":44.416668}},
                  {"_id":3632308,"name":"Merida","country":"VE","coord":{"lon":-71.144997,"lat":8.598333}},
                  {"_id":473537,"name":"Vinogradovo","country":"RU","coord":{"lon":38.545555,"lat":55.423332}},
                  {"_id":384848,"name":"Qarah Gawl al ‘Ulyā","country":"IQ","coord":{"lon":45.6325,"lat":35.353889}},
                  {"_id":569143,"name":"Cherkizovo","country":"RU","coord":{"lon":37.728889,"lat":55.800835}},
                  {"_id":713514,"name":"Alupka","country":"UA","coord":{"lon":34.049999,"lat":44.416668}},
                  {"_id":2878044,"name":"Lichtenrade","country":"DE","coord":{"lon":13.40637,"lat":52.398441}},
                  {"_id":464176,"name":"Zavety Il’icha","country":"RU","coord":{"lon":37.849998,"lat":56.049999}} ]


    function updateHistory(city) {
      vm.searchHistory[city._id] = city;
      store.setObject('history', vm.searchHistory);
    }

    var searchUrl = 'http://api.openweathermap.org/data/2.5/forecast?lat=';
    var appKey = 'APPID=b278086efc1694e3702491f0352fc402';

    function citySelected(city){
      var url = searchUrl + city.coord.lat + '&lon=' + city.coord.lon + '&' + appKey;
      api.get(url).then(function(res){
        vm.wheather = res.data;
        updateHistory(city);
      })
    }
    //console.log(api.get('/users'));

  }
})();