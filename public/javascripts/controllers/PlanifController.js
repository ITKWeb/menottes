app.controller('PlanifController', ['$scope', 'Network', '$routeParams', '$rootScope', function($scope, $network, $routeParams, $rootScope) {
    
    $network.getSprints(function(sprints) {
        $scope.sprints = sprints;
		//Ajout By Laurent
			//pour que le Backlog soit selected direct et que ses tickets apparaissent cash aussi
			//A vérifier donc...
			$scope.selected = $scope.sprints[0];
			$network.getTickets(function(tickets) {
				$scope.tickets = tickets;
			}, $routeParams.projectId, sprints[0].id);
		//fin d'ajout by Laurent
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
        var temp = $scope.tickets[dragged];
        $scope.tickets[dragged] = $scope.tickets[dropped];
        $scope.tickets[dropped] = temp;
        $scope.$apply();
    });
}]);
