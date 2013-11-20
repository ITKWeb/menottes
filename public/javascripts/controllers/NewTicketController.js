app.controller('NewTicketController', ['$scope', 'Network', '$location',
	function($scope, $network, $location) {
    
    	$scope.ticket = {};

	    $scope.createTicket = function() {
	    	if ($scope.ticket.id !== undefined) {
	    		$network.saveTickets();
	    	} else {   	
    			$network.createTicket($scope.ticket);
            	$scope.$parent.showGlassNewTicket=false;
            }
    	};

    	$scope.hide=function(){
			$scope.$parent.showGlassNewTicket=false;
		};
	         

}]);
