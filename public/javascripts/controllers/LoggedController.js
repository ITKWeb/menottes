app.controller('LoggedController', ['$scope', 'Network', '$routeParams', '$rootScope', '$location', 'Pdf', function($scope, $network, $routeParams, $rootScope, $location, $pdf) {
    
    $scope.upArrowURL = 'images/arrow_up.png';
    $scope.downArrowURL = 'images/arrow_down.png';
    var ticketPriorityToGet;

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
    
    $scope.priorityUp = function(ticket){
    	ticketPriorityToGet = ticket.priority + 1;
    	$network.getTicketsByPriority(function(gotTicket){
    		gotTicket.priority -= 1; 
    		ticket.priority += 1;
    	},ticketPriorityToGet);
        $network.saveTickets();
    }

    $scope.priorityDown = function(ticket){
    	ticketPriorityToGet = ticket.priority - 1;
    	$network.getTicketsByPriority(function(gotTicket){
    		gotTicket.priority += 1; 
    		ticket.priority -= 1;
    	},ticketPriorityToGet);
        $network.saveTickets();
    }

    $scope.printPdf = function() {
    	$pdf.printTickets($scope.tickets);
    }

    $scope.clickOnBack = function() {
        $location.path('/login');
    }

}]);
