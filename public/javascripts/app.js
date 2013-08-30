var app = angular.module('app', []);

app.config(["$routeProvider",
  function($routeProvider) {
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
