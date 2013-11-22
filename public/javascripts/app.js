var app = angular.module('app', []);

app.config(["$routeProvider", "$httpProvider",
  function($routeProvider, $httpProvider) {
    $httpProvider.defaults.headers['common']['Accept'] = 'application/json';
    $routeProvider
      .when('/', {
        templateUrl: 'views/userLogin.html',
        controller: "UserLoginController"
      })
       .when('/login', {
            templateUrl: 'views/login.html',
            controller: "LoginController"
        })
      .when('/logged/:projectId', {
        templateUrl: 'views/logged.html',
        controller: "LoggedController"
      })
      .when('/projets', {
        templateUrl: 'views/addNewProject.html',
        controller: "NewProjectController"
      })
      .when('/tickets', {
        templateUrl: 'views/addNewTicket.html',
        controller: "NewTicketController"
      })
      .when('/planif', {
        templateUrl: 'views/planif.html',
        controller: "PlanifController"
      })
      .when('/polls', {
        templateUrl: 'views/addNewPoll.html',
        controller: "NewPollController"
      })
      .when('/polls/:pollId', {
        templateUrl: 'views/poll.html',
        controller: "PollController"
      })
      .when('/displayTicket', {
        templateUrl: 'views/addNewTicket.html',
        controller: "NewTicketController"
      })
      .when('/displayTicket/:projectId/:sprintId/:ticketId', {
        templateUrl: 'views/addNewTicket.html',
        controller: "NewTicketController"
      })
     .otherwise({
        redirectTo: '/'
      });
  }
]);
