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

.controller('eventsCtrl', function ($scope, $route, $routeParams, $location, events) {
      $scope.separator_title = 'Nuestros proximos eventos';
      $scope.separator_subtitle = 'Listado de eventos, talleres y cursos';
      
      var query = events.get(function() {
        $scope.events = query.events; 
      }); 
})

.controller('speakersCtrl', function ($scope, $route, $routeParams, $location, speakers) {
      $scope.separator_title = 'Nuestros ponentes';
      $scope.separator_subtitle = 'Directorio de ponentes y profesores';
      
      var query = speakers.get(function() {
        $scope.speakers = query.speakers; 
      }); 
})

.controller('eventCtrl', function ($scope, $route, $routeParams, $location, events) {
      
      var query = events.get({ id: $routeParams.eventId }, function () {
          $scope.event = query.events[0];
          $scope.separator_title = $scope.event.area_name;
          $scope.separator_subtitle = $scope.event.category_name; 
      });
})

.controller('loginCtrl', function ($scope, $route, $routeParams, $location, auth) {
      $scope.separator_title = 'Inicia sesión';
      $scope.separator_subtitle = 'Ingresa al sitio';
      
      $scope.login = function () {
        auth.login($scope.username, $scope.password);
      }
})

.controller('welcomeCtrl', function($scope, auth) {
      $scope.separator_title = 'Bienvenido';
      $scope.separator_subtitle = 'Solo falta un paso....';
})

.controller('profileCtrl', function($scope, $cookies, $location, auth, accounts) {
      $scope.separator_title = 'Perfil del usuario';
      $scope.separator_subtitle = 'Datos personales del usuario';
    
      var query = accounts.get({ id: $cookies.data.account_id }, function () {
          $scope.account = query.accounts[0]; 
      });
      
      $scope.update = function () {
            var result = accounts.update($scope.account, function() {
                  console.log(result.accounts);
                  if (result.accounts.affectedRows == 1) {
                        $location.path('/dashboard')
                  };
            });
      } 
})

.controller('dashboardCtrl', function($scope, $cookies, auth) {
      $scope.separator_title = 'Centro de control';
      $scope.separator_subtitle = $cookies.data.account_firstname.concat(' ',$cookies.data.account_lastname);
      console.log($cookies.data);
})

.controller('passwordCtrl', function($scope, auth) {
    
})

.controller('bankCtrl', function($scope, $cookies, $location, auth, line) {
      $scope.separator_title = 'Ficha de deposito Bancomer ';
      $scope.separator_subtitle = 'Genera una ficha de deposito';
      
      var query = line.get(function() {
        $scope.line = query.line[0];
        $scope.line.account_id = $cookies.data.account_id; 
      });
      
      $scope.request = function () {
            var request = {};
            request.account_id = $scope.line.account_id;
            request.reference_id = $scope.line.reference_id;
            var result = line.save(request, function() {
                  console.log(result.line);
                  if (result.line.affectedRows == 1) {
                        $location.path('/requests')
                  };
            });
      }
})

.controller('requestsCtrl', function($scope, $cookies, $location, auth, line) {
      $scope.separator_title = 'Relación de referencias solicitadas ';
      $scope.separator_subtitle = 'Fichas de deposito generadas';
      
      var query = line.get({ id: 2 }, function() {
        $scope.lines = query.line; 
      });
      
      $scope.remove = function () {
            var result = line.delete($scope.account, function() {
                  console.log(result.line);
                  if (result.line.affectedRows == 1) {
                        $location.path('/requests')
                  };
            });
      }
})

.controller('signinCtrl', function ($scope, $route, $routeParams, $location, accounts) {
      $scope.account = {};
      $scope.separator_title = 'Registrate';
      $scope.separator_subtitle = 'Rellena el siguiente formulario con tus datos.';
      
      $scope.signin = function () {
            var result = accounts.save($scope.account, function() {
                  console.log(result.accounts);
                  if (result.accounts.affectedRows == 1) {
                        $location.path('/welcome')
                  };
            });
      }
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