angular.module('main.controllers', ['main.models', 'main.auth', 'main.directives', 'pdf'])
.controller('mainCtrl', function ($scope, $route, $routeParams, $location, events) {
     var query = events.get(function() {
      $scope.events = query.events; 
    }); 
})

.controller('NavController', function ($scope, $route, $location, auth) {
    if(typeof(sessionStorage.id) == "undefined") {
          $scope.auth = 0;
    } else {
          $scope.auth = 1;
    }
    
    $scope.logout = function () {
          auth.logout();
    }     
})

.controller('SeparatorController', function ($scope) {
      if(typeof(sessionStorage.id) != "undefined") {
            $scope.user_name = sessionStorage.firstname + ' ' + sessionStorage.lastname;
      }
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

.controller('profileCtrl', function($scope, $location, auth, accounts) {
      $scope.separator_title = 'Perfil del usuario';
      $scope.separator_subtitle = 'Datos personales del usuario';
    
      var query = accounts.get({ id: sessionStorage.id }, function () {
          $scope.account = query.accounts[0]; 
      });
      
      $scope.update = function () {
            var result = accounts.update($scope.account, function () {
                  console.log(result.accounts);
                  if (result.accounts.affectedRows == 1) {
                        $location.path('/dashboard')
                  };
            });
      } 
})

.controller('dashboardCtrl', function($scope, auth) {
      $scope.separator_title = 'Centro de control';
      $scope.separator_subtitle = sessionStorage.getItem('firstname') + ' ' + sessionStorage.getItem('lastname');
})

.controller('passwordCtrl', function($scope, $location, auth, accounts) {
      $scope.separator_title = 'Cambio de contraseña';
      $scope.separator_subtitle = 'Aqui puedes cambiar tu contraseña de ingreso';
      
      var query = accounts.get({ id: sessionStorage.id }, function () {
          $scope.account = query.accounts[0]; 
      });
            
      $scope.password = function () {
            console.log($scope.account);
            var result = accounts.update($scope.account, function () {
                  console.log(result.accounts);
                  if (result.accounts.affectedRows == 1) {
                        $location.path('/dashboard')
                  };
            });
      }
})

.controller('bankCtrl', function($scope, $location, auth, line) {
      $scope.separator_title = 'Ficha de deposito Bancomer ';
      $scope.separator_subtitle = 'Genera una ficha de deposito';
      
      var query = line.get(function() {
        $scope.line = query.line[0];
        $scope.line.account_id = sessionStorage.id; 
      });
      
      $scope.request = function () {
            var request = {};
            request.account_id = $scope.line.account_id;
            request.reference_id = $scope.line.reference_id;
            request.event_id = 18;
            request.accounts_has_references_serie = 0;
            var result = line.save(request, function() {
                  console.log(result.line);
                  if (result.line.affectedRows == 1) {
                        $location.path('/requests')
                  };
            });
      }
})

.controller('requestsCtrl', function($scope, $location, auth, line) {
      $scope.separator_title = 'Relación de referencias solicitadas ';
      $scope.separator_subtitle = 'Fichas de deposito generadas';
      
      var query = line.get({ id: sessionStorage.id }, function() {
        $scope.lines = query.line; 
      });
      
      $scope.remove = function (reference_id) {
            var result = line.delete({ id: sessionStorage.id, reference: reference_id }, function() {
                  console.log(result.line);
                  if (result.line.affectedRows == 1) {
                        $location.path('/dashboard')
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