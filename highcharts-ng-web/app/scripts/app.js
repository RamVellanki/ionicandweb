//Setup routing here
(function() {
  "use strict";
  //See: https://github.com/pablojim/highcharts-ng
  var app = angular.module('highchartsApp', ["ngRoute",  "highcharts-ng"]);

  app.config(function($routeProvider){
    $routeProvider
      .when("/main",{
        templateUrl: "views/main.html",
        controller: "MainController"
      })
      .when("/bar",{
        templateUrl:"views/bar.html",
        controller: "BarController"
      })
      .when("/line",{
        templateUrl: "views/line.html",
        controller: "LineController"
      })
      .otherwise({redirectTo:"/main"})
  });
}());
