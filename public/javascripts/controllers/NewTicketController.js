app.controller('NewTicketController', ['$scope', 'Network', '$routeParams', '$rootScope', '$location', function ($scope, $network, $routeParams, $rootScope, $location) {
    

    $network.getTicketById(function (ticket) {
		console.log('edit ticket');
        $scope.ticket = ticket;
    }, $routeParams.ticketId);
		/*
        $network.getTicketById(function(ticket) {
            console.log('edit ticket');
            $scope.ticket = ticket;
        }, $scope.$parent.ticketId);
*/
    $scope.saveTicket = function () {
        $scope.ticket.projet_id = parseInt($routeParams.projectId);
        $scope.ticket.sprint_id = parseInt($routeParams.sprintId);
        if ($scope.ticket.id === undefined) { 	
            $network.createTicket($scope.ticket);
        } else {
            $network.saveTicket($scope.ticket);
        }
        //$scope.$parent.showGlassNewTicket=false;
		$location.path('/logged/'+$scope.ticket.projet_id);
	};

    $scope.hide=function (){
		//$scope.$parent.showGlassNewTicket=false;
        $location.path('/logged/'+$scope.ticket.projet_id);
	};
	         

}]);
