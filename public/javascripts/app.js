var app = angular.module('app', []);

app.config(["$routeProvider", "$httpProvider",
  function($routeProvider, $httpProvider) {
    $httpProvider.defaults.headers['common']['Accept'] = 'application/json';
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: "LoginController"
      })
      .when('/logged/:projectId', {
        templateUrl: 'views/logged.html',
        controller: "LoggedController"
      })
      .when('/projet/', {
        templateUrl: 'views/addNewProject.html',
        controller: "ProjectController"
      })
      .when('/planif', {
        templateUrl: 'views/planif.html',
        controller: "PlanifController"
      })
      .when('/choice', {
        templateUrl: 'views/choice.html',
        controller: "ChoiceController"
      })
      .otherwise({
        redirectTo: '/'
      });
  }
]);
