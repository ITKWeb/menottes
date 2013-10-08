app.controller('displayTicketController', ['$scope', 'Network', '$routeParams', '$rootScope', '$location', function($scope, $network, $routeParams, $rootScope, $location) {

	$network.getTicket(1);
	}]);