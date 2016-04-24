angular.module('main.controllers', [])
.controller('mainCtrl', function ($scope, $route, $routeParams, $location, events) {
     var query = events.get(function() {
      $scope.events = query.events;
      console.log($scope.events);    
    }); 
})

.controller('NavController', function ($scope, $location, $cookies) {
    //console.log($scope);
    //$cookies.nombrecookie = "unodepiera";
    //para acceder
    console.log(JSON.stringify($cookies.username));
})

.controller('speakersCtrl', function ($scope, $route, $routeParams, $location) {
      
})

.controller('loginCtrl', function ($scope, $route, $routeParams, $location) {
      
})

.controller('signinCtrl', function ($scope, $route, $routeParams, $location) {
      
});