angular.module('main.controllers', [])
.controller('mainCtrl', function ($scope, $route, $routeParams, $location, events) {
     var query = events.get(function() {
      $scope.events = query.events;
      console.log($scope.events);    
    });
    
     
})

.controller('signinCtrl', function ($scope, $route, $routeParams, $location) {
      
});