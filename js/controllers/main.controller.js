angular.module('main.controllers', [])
.controller('mainCtrl', function ($scope, $route, $routeParams, $location, events) {
     var query = events.get(function() {
      $scope.events = query.events; 
    }); 
})

.controller('NavController', function ($scope, $location, $cookies) {
    //console.log($scope);
    //$cookies.nombrecookie = "unodepiera";
    //para acceder
    console.log(JSON.stringify($cookies.username));
})

.controller('speakersCtrl', function ($scope, $route, $routeParams, $location, speakers) {
      $scope.separator_title = 'Nuestros ponentes';
      $scope.separator_subtitle = 'Directorio de ponentes y profesores';
      
      var query = speakers.get(function() {
        $scope.speakers = query.speakers; 
      }); 
})

.controller('loginCtrl', function ($scope, $route, $routeParams, $location) {
      $scope.separator_title = 'Inicia sesión';
      $scope.separator_subtitle = 'Ingresa al sitio';
})

.controller('signinCtrl', function ($scope, $route, $routeParams, $location) {
      $scope.separator_title = 'Registrate';
      $scope.separator_subtitle = 'Rellena el siguiente formulario con tus datos.';
})

.controller('aboutCtrl', function ($scope, $route, $routeParams, $location) {
      $scope.separator_title = 'Aviso de privacidad';
      $scope.separator_subtitle = 'Políticas del Sitio y Declaración de protección de datos';
})

.controller('creditsCtrl', function ($scope, $route, $routeParams, $location, credits) {
      $scope.separator_title = 'Directorio';
      $scope.separator_subtitle = 'Directorio universitario';
      
      var query = credits.get(function() {
        $scope.credits = query.credits; 
      });
});