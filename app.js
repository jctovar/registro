angular.module('starter', ['ngRoute', 'ngResource', 'ngCookies', 'ngSanitize', 'mgcrea.ngStrap', 'ngAnimate', 'main.controllers', 'main.models'])
  .run(function ($rootScope) {
    //al cambiar de rutas
    $rootScope.$on('$routeChangeStart', function()
    {
        //llamamos a checkStatus, el cual lo hemos definido en la factoria auth
        //la cuál hemos inyectado en la acción run de la aplicación
        //auth.checkStatus();
    })
  })

  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/signin', {
          templateUrl: 'templates/signin.html',
          controller: 'signinCtrl'
        })
        .otherwise({
          redirectTo: '/',
          templateUrl: 'templates/main.html',
          controller: 'mainCtrl'
        });
  }])