(function() {
  angular.module('forecast-app')
  .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope'];

  function HomeController($scope){
    $scope.getWeatherURL = getWeatherURL;

    function getWeatherURL(newLatitude, newLongitude){
      console.log(newLatitude);
      console.log(newLongitude);
    }

  }
}());
