app.controller('displayTicketController', ['$scope', 'Network', '$routeParams', '$rootScope', '$location', function($scope, $network, $routeParams, $rootScope, $location) {

	/*$network.getTicket(1){
		
	}*/

  //$scope.clickOnTicket = function(ticketId) {
	$network.getTicketById(function(ticket) {
		console.log('controeller');
        $scope.ticket = ticket;
        }, $routeParams.ticketId);
	//};

	$network.getTicket(1);
	}]);