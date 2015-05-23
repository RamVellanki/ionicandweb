(function() {
  "use strict";
  var app  = angular.module('highchartsApp');

  var LineController = function($scope){
    $scope.highchartsNG = {
        options: {
            chart: {
                type: 'line',
                datalables: {
                  enabled: true
                }
            }
        },
        xAxis: {
          categories: ['January', 'Februar', 'March', 'April', 'May', 'June',
                      'July', 'August', 'September', 'October', 'November','December'],
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          title:{
            text: 'Count in figures',
            align: 'high'
          },
          labels:{
            overflow: 'justify'
          }
        },
        series: [{
            name: 'Flights',
            data: [100, 50, 20, 203, 8,100, 50, 20, 203, 8, 101,78]
        }, {
            name: 'Cruises',
            data: [133, 60, 30, 408, 6,133, 60, 30, 408, 6, 78, 76]
        }, {
            name: 'Packages',
            data: [123, 60, 34, 320, 9,123, 60, 34, 320, 9, 77,67]
        }, {
            name: 'Cabs',
            data: [153, 54, 44, 732, 8,153, 54, 44, 732, 8,88,65]
        }, {
            name: 'Events',
            data: [93, 59, 44, 432, 9, 93, 59, 44, 432, 9, 77,34]
        }]
    };
  };

  app.controller("LineController",['$scope',LineController]);
}());
