var app = angular.module('app', []);

app.config(["$routeProvider",
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: "LoginController"
      })
      .when('/logged', {
        templateUrl: 'views/logged.html',
        controller: "LoggedController"
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);
