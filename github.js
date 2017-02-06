(function(){
   
   var github = function($http){
     
      var getuser = function(username){
          return $http.get("https://api.github.com/users/"+username)
                      .then(function(response){
                          return response.data;
                      });
        
      };
      
      var getRepos = function(user){
          return $http.get(user.repos_url)
                      .then(function(response){
                            return response.data;
                      });
      }
     return {
         getuser: getuser,
         getRepos: getRepos
     };
   };
  
  
  
  
  var module = angular.module("githubViewer");
  module.factory("github",github);
})();