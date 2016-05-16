angular.module('starter', ['ngRoute', 'ngResource', 'ngSanitize', 'mgcrea.ngStrap', 'base64','ui.gravatar', 'ngAnimate', 'main.controllers'])
  .run(function ($rootScope, auth) {
    //al cambiar de rutas
    $rootScope.$on('$routeChangeStart', function()
    {
        //llamamos a checkStatus, el cual lo hemos definido en la factoria auth
        //la cuál hemos inyectado en la acción run de la aplicación
        auth.checkStatus();
    })
  })

  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/events', {
          templateUrl: 'templates/events.html',
          controller: 'eventsCtrl'
        })
        .when('/event/:eventId', {
          templateUrl: 'templates/event.html',
          controller: 'eventCtrl'
        })
        .when('/request/:eventId', {
          templateUrl: 'templates/request.html',
          controller: 'eventCtrl'
        })
        .when('/signin', {
          templateUrl: 'templates/signin.html',
          controller: 'signinCtrl'
        })
        .when('/welcome', {
          templateUrl: 'templates/welcome.html',
          controller: 'welcomeCtrl'
        })
        .when('/login', {
          templateUrl: 'templates/login.html',
          controller: 'loginCtrl'
        })
        .when('/dashboard', {
          templateUrl: 'templates/dashboard.html',
          controller: 'dashboardCtrl'
        })
        .when('/profile', {
          templateUrl: 'templates/profile.html',
          controller: 'profileCtrl'
        })
        .when('/password', {
          templateUrl: 'templates/password.html',
          controller: 'passwordCtrl'
        })
        .when('/bank', {
          templateUrl: 'templates/bank.html',
          controller: 'bankCtrl'
        })
        .when('/requests', {
          templateUrl: 'templates/requests.html',
          controller: 'requestsCtrl'
        })
        .when('/speakers', {
          templateUrl: 'templates/speakers.html',
          controller: 'speakersCtrl'
        })
        .when('/about', {
          templateUrl: 'templates/about.html',
          controller: 'aboutCtrl'
        })
        .when('/credits', {
          templateUrl: 'templates/credits.html',
          controller: 'creditsCtrl'
        })
        .otherwise({
          redirectTo: '/',
          templateUrl: 'templates/main.html',
          controller: 'mainCtrl'
        });
  }])