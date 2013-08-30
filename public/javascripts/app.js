var app = angular.module('app', []);

app.config(["$routeProvider",
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/userLogin.html',
        controller: "UserLoginController"
      })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: "loginController"
        })
      .when('/logged/:projectId', {
        templateUrl: 'views/logged.html',
        controller: "LoggedController"
      })
      .when('/planif', {
        templateUrl: 'views/planif.html',
        controller: "PlanifController"
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);
