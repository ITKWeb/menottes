app.controller('LoggedController', ['$scope', 'Network', '$routeParams', '$rootScope', function($scope, $network, $routeParams, $rootScope) {
    
    $network.getSprints(function(sprints) {
        $scope.sprints = sprints;
		//$scope.selected = $scope.sprints[0]; //Pour le premier sélectionné par défaut -> a voir car aucun vraiment sélectionné par défaut. Il faudrait que le Backlog le soit.
    }, $routeParams.projectId);
    
    $scope.clickOnSprint = function(sprint) {
	console.log(sprint);
		$scope.selected = sprint;
        $network.getTickets(function(tickets) {
            $scope.tickets = tickets;
        }, $routeParams.projectId, sprint.id);
    };
    
    $rootScope.$on('moveColumnEvent', function(evt, dragged, dropped) {
        console.log(line1, line2);
    });
}]);
