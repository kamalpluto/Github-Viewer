// Code goes here
(function() {
  var app = angular.module("githubViewer");
  
  var UserController = function($scope, github,$routeParams) {

    var onUserCompletion = function(data) {
      $scope.user = data;
      github.getRepos($scope.user).then(onRepos, onError);
    };

    var onRepos = function(data) {
      $scope.repos = data;
    };

    var onError = function(reason) {
      $scope.error = "Could not fetch the data!";
    };


    $scope.username = $routeParams.username;
    $scope.repoSortOrder = "-stargazers_count";
    github.getuser($scope.username).then(onUserCompletion,onError);
    

  };
  app.controller("UserController",  UserController);


})();