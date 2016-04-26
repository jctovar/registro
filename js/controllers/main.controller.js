angular.module('main.controllers', ['main.models', 'main.auth', 'main.directives'])
.controller('mainCtrl', function ($scope, $route, $routeParams, $location, events) {
     var query = events.get(function() {
      $scope.events = query.events; 
    }); 
})

.controller('NavController', function ($scope, $location, $cookies, auth) {
    //console.log($scope);
    //$cookies.nombrecookie = "unodepiera";
    //para acceder
    console.log('username:' + JSON.stringify($cookies.username));
})

.controller('speakersCtrl', function ($scope, $route, $routeParams, $location, speakers) {
      $scope.separator_title = 'Nuestros ponentes';
      $scope.separator_subtitle = 'Directorio de ponentes y profesores';
      
      var query = speakers.get(function() {
        $scope.speakers = query.speakers; 
      }); 
})

.controller('loginCtrl', function ($scope, $route, $routeParams, $location, auth) {
      $scope.separator_title = 'Inicia sesión';
      $scope.separator_subtitle = 'Ingresa al sitio';
      
      $scope.login = function () {
        console.log($scope.username);
        auth.login($scope.username, $scope.password);
      }
})

.controller('profileCtrl', function($scope, $cookies, auth, accounts) {
      $scope.separator_title = 'Perfil del usuario';
      $scope.separator_subtitle = 'Datos personales del usuario';
    
      var query = accounts.get({ id: 1 }, function () {
          $scope.account = query.accounts[0]; 
      }); 
})

.controller('dashboardCtrl', function($scope, auth) {
      $scope.separator_title = 'Centro de control';
      $scope.separator_subtitle = 'Acciones disponibles';
})

.controller('passwordCtrl', function($scope, auth) {
    
})

.controller('bankCtrl', function($scope, auth) {
    
})

.controller('requestsCtrl', function($scope, auth) {
    
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