app.controller('LoggedController', ['$scope', 'Network', '$routeParams', '$rootScope', '$location', 'Pdf', function($scope, $network, $routeParams, $rootScope, $location, $pdf) {
    
    $scope.upArrowURL = '../images/arrow_up.png';

    $network.getSprints(function(sprints) {
        $scope.sprints = sprints;
		$scope.selected = $scope.sprints[0];
		loadTickets($scope.selected.id);
	}, $routeParams.projectId);

	function loadTickets(idSprint) {
		$network.getTickets(function(tickets) {
			$scope.tickets = tickets;
		}, $routeParams.projectId, idSprint);
	}
    
    $scope.clickOnSprint = function(sprint) {
		console.log(sprint);
		$scope.selected = sprint;
        $network.getTickets(function(tickets) {
            $scope.tickets = tickets;
        }, $routeParams.projectId, sprint.id);
    };

  $scope.clickOnTicket = function(ticketId) {

	$network.getTicketById(function(ticket) {
		console.log('controller 3');
        $scope.ticket = ticket;
        $location.path('/displayTicket/'+ticket.id);
        }, ticketId);
	};
    
    $scope.printPdf = function() {
    	$pdf.printTickets($scope.tickets);
    }

}]);
