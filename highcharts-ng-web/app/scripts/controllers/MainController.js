(function() {
  "use strict";
  var app  = angular.module('highchartsApp');

  var MainController = function($scope){
    $scope.highchartsNG = {
        options: {
            chart: {
                type: 'pie'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        formatter: function() {

                        return this.key+' : '+Math.round((this.percentage*100)/100,0) + ' %';
                      },
                        distance: -40,
                        color:'white'
                    },
                    showInLegend: true
                }
            },
        },

        series: [{
            type: 'pie',
            name: 'Test',
            data: [ ['Expenditure', 100000],
                    ['Profit', 50000],
                  ]
        }],
        title: {
            text: 'Expenditure vs Profit'
        },
        loading: false
    };
  };

  app.controller("MainController",['$scope',MainController]);
}());
