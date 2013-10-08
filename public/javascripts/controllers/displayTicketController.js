<<<<<<< HEAD
app.controller('displayTicketController', ['$scope', 'Network', '$routeParams', '$rootScope', '$location', function($scope, $network, $routeParams, $rootScope, $location) {
=======
app.controller('LoggedController', ['$scope', 'Network', '$routeParams', '$rootScope', '$location', function($scope, $network, $routeParams, $rootScope, $location) {

	/*$network.getTicket(1){
		
	}*/
>>>>>>> 25440ec5322db11a57b1e4a4bccac9b9e7be2960

  //$scope.clickOnTicket = function(ticketId) {
	$network.getTicketById(function(ticket) {
		console.log('controeller');
        $scope.ticket = ticket;
        }, $routeParams.ticketId);
	//};

	}]);