// Code goes here
(function() {
  var app = angular.module("githubViewer");

  var RepoController = function($scope, github, $routeParams) {
    var onRepoComplete = function(data) {
      $scope.contributor = data;
      //Let's send another request to get repos information
      github.getRepoContributors($scope.contributor)
            .then(onContributors, onError)
    };
    
    var onError = function(reason) {
      $scope.error = "Couldn't fetch data";
    };

    var onContributors = function(data){
      $scope.contributors = data;
    };
    
    username = $routeParams.username;
    reponame = $routeParams.reponame;
    github.getRepoDetails(username, reponame).then(onRepoComplete, onError);
  };

  app.controller("RepoController", RepoController);
}());