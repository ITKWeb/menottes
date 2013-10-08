app.controller('LoggedController', ['$scope', 'Network', '$routeParams', '$rootScope', '$location', function($scope, $network, $routeParams, $rootScope, $location) {
    
    $scope.upArrowURL = '../images/arrow_up.png';

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

     $scope.clickOnTicket = function() {
        $location.path('/displayTicket');
    }

    
    $rootScope.$on('moveColumnEvent', function(evt, dragged, dropped) {
        console.log(line1, line2);
    });
}]);
