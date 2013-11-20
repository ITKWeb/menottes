app.controller('NewTicketController', ['$scope', 'Network', '$routeParams', '$rootScope', '$location', function($scope, $network, $routeParams, $rootScope, $location) {
    

   		$network.getTicketById(function(ticket) {
			console.log('edit ticket');
        	$scope.ticket = ticket;
        }, $routeParams.ticketId);
		/*
        $network.getTicketById(function(ticket) {
            console.log('edit ticket');
            $scope.ticket = ticket;
        }, $scope.$parent.ticketId);
*/
		$scope.saveTicket = function() {
            if ($scope.ticket.id === undefined) {    	
    		    $network.createTicket($scope.ticket);
            } else {
                $network.saveTickets();
            }
            //$scope.$parent.showGlassNewTicket=false;
			$location.path('/logged/');

    	};

    	$scope.hide=function(){
			//$scope.$parent.showGlassNewTicket=false;
            $location.path('/logged/');

		};
	         

}]);
