// Code goes here
(function() {
  var app = angular.module("githubViewer");
  var MainController = function($scope, $interval, $location) {
    
     var decrementCountdown = function() {
      $scope.countdown = $scope.countdown - 1;
      if ($scope.countdown < 1) {
        $scope.search($scope.username);
      }
    };
    
    var countdownInterval = null;
    var startcountdown = function() {
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    };

    $scope.search = function(username) {
      if (countdownInterval) {
        $interval.cancel(countdownInterval);
        countdownInterval = null;
      }
      $location.path("/user/"+username);
    };

    $scope.username = "angular";
    $scope.countdown = 5;
    startcountdown();

  };
  app.controller("MainController", MainController);
})();