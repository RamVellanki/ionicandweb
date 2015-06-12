(function(){
  var app = angular.module("githubViewer",["ngRoute"]); //As we are using routing, our module depends on ng-route
  
  //Inside this config we specify the routing.
  app.config(function($routeProvider){
    
    //Main.html - for searching user
      $routeProvider
          .when("/main",{
            templateUrl: "main.html",
            controller: "MainController"
          })
          .when("/user/:username", {
            templateUrl: "user.html",
            controller: "UserController"
          })
          .when("/repo/:username/:reponame",{
            templateUrl: "repo.html",
            controller: "RepoController"
          })
          .otherwise({redirectTo:"/main"})//Default routing
    //user.html - user details
    
    //repo.html - show repository detalis
  });
}());