app.controller('LoggedController', ['$scope', 'Network', '$routeParams', '$rootScope', function($scope, $network, $routeParams, $rootScope) {
    
    $network.getSprints(function(sprints) {
        $scope.sprints = sprints;
    }, $routeParams.projectId);
    
    $scope.clickOnSprint = function(sprint) {
	console.log(sprint);
        $network.getTickets(function(tickets) {
            $scope.tickets = tickets;
        }, $routeParams.projectId, sprint.id);
    };
    
    $rootScope.$on('moveColumnEvent', function(evt, dragged, dropped) {
        console.log(line1, line2);
    });
}]);
