(function() {
  angular.module('forecast-app')
  .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope', 'WeatherService'];

  function HomeController($scope, WeatherService){
    $scope.getWeather = getWeather;
    $scope.weather = WeatherService.weatherData;
    //$scope.log = log;

    $scope.$watch(function(){
      return WeatherService.weatherData;
    }, function(newVal, oldVal){
      $scope.weather = WeatherService.weatherData;
    });

    function getWeather(latitude, longitude){
        WeatherService.getWeather(latitude, longitude);
    }
    //function log(){
    //  console.log(WeatherService.weatherData);

    //}
  }
}());
