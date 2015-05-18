//See: https://github.com/pablojim/highcharts-ng
var myapp = angular.module('myapp', ["highcharts-ng"]);

myapp.controller('MainCtrl', function ($scope) {
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
            data: [ ['C++', 150],
                    ['JavaScript', 95],
                    ['C#', 80],
                    ['C', 75],
                    ['Java', 70]]
        }],
        title: {
            text: 'Pie Charts Example'
        },
        loading: false
    }

});
