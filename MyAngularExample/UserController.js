// Code goes here
(function() {
  var app = angular.module("githubViewer");

  var UserController = function($scope, github, $routeParams) {
    var onUserComplete = function(data) {
      $scope.user = data;
      //Let's send another request to get repos information
      github.getRepos($scope.user)
            .then(onRepos, onError)
    };
    
    var onError = function(reason) {
      $scope.error = "Couldn't fetch data";
    };

    var onRepos = function(data){
      $scope.repos = data;
    };
    
    $scope.username = $routeParams.username;
    $scope.repoSortOrder="-stargazers_count";
    github.getUser($scope.username).then(onUserComplete, onError);
  };

  app.controller("UserController", UserController);
}());