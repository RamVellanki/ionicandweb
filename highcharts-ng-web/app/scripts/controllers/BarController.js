(function() {
  "use strict";
  var app  = angular.module('highchartsApp');

  var BarController = function($scope){
    $scope.highchartsNG = {
        options: {
            chart: {
                type: 'bar',
                datalables: {
                  enabled: true
                }
            }
        },
        xAxis: {
          categories: ['Flights', 'Cruises', 'Packages', 'Cabs', 'Events'],
          title: {
            text: null
          }
        },
        yAxis: {
          title:{
            text: 'Amount in $',
            align: 'high'
          },
          labels:{
            overflow: 'justify'
          }
        },
        series: [{
            name: 'January',
            data: [100, 50, 20, 203, 8]
        }, {
            name: 'February',
            data: [133, 60, 30, 408, 6]
        }, {
            name: 'March',
            data: [123, 60, 34, 320, 9]
        }, {
            name: 'April',
            data: [153, 54, 44, 732, 8]
        }, {
            name: 'May',
            data: [93, 59, 44, 432, 9]
        }, {
            name: 'June',
            data: [143, 61, 49, 523, 9]
        }, {
            name: 'July',
            data: [103, 65, 54, 234, 9]
        }, {
            name: 'August',
            data: [167, 64, 44, 664, 8]
        }, {
            name: 'September',
            data: [176, 54, 35, 454, 6]
        }, {
            name: 'October',
            data: [240, 80, 65, 732, 5]
        }, {
            name: 'November',
            data: [255, 91, 75, 556, 9]
        }, {
            name: 'December',
            data: [300, 100, 85, 889, 12]
        }]
    };
  };

  app.controller("BarController",['$scope',BarController]);
}());
