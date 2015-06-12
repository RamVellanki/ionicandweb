(function(){
  
  //Let's define service. This uses revealing module design pattern
  var github = function($http){ //This service requires $http service
    var getUser = function(username){
      //This method should be async so this requires to return promise.
      //We can let the user take care of promise or we can actually take care of
      //promise and return data.
      return $http.get("https://api.github.com/users/"  +username)
              .then(function(response){
                return response.data; //The "then" always returns the promise
                //so even the caller gets the promise and the promise ends only after 
                //data is returned.
              })
    }
    
    var getRepos = function(user){
      return $http.get(user.repos_url)
                  .then(function(response){
                    return response.data;
                  });
    };
    
    var getRepoDetails = function(username, reponame){
      return $http.get("https://api.github.com/repos/"+username+"/"+reponame)
            .then(function(response){
              return response.data
            });
    };
    
    var getRepoContributors = function(contributor){
      return $http.get(contributor.contributors_url)
                  .then(function(response){
                    return response.data;
                  });
    }
    
    return{
      getUser: getUser,
      getRepos: getRepos,
      getRepoDetails: getRepoDetails,
      getRepoContributors: getRepoContributors
    };
    
  };
  
  
  var module = angular.module("githubViewer");//Get the reference to our module
  
  //Now register the service
  module.factory("github", github);
}());