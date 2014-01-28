app.controller('NewTicketController', ['$scope', 'Network', '$routeParams', '$rootScope', '$location', 'Pdf', function ($scope, $network, $routeParams, $rootScope, $location, $pdf) {
    
    $network.getSprint(function(sprint) {
        console.log(sprint);
        $scope.sprint = sprint;
    },  $routeParams.projectId, $routeParams.sprintId);
    
    $network.getTicketById(function (ticket) {
        console.log('edit ticket');
        $scope.ticket = ticket;
    }, $routeParams.projectId, $routeParams.sprintId, $routeParams.ticketId);

    $scope.saveTicket = function () {
        $scope.ticket.projet_id = parseInt($routeParams.projectId);
        $scope.ticket.sprint_id = parseInt($routeParams.sprintId);
        if ($scope.ticket.id === undefined) { 	
            $network.createTicket($scope.ticket);
        } else {
            $network.saveTicket($scope.ticket);
        }
        //$scope.$parent.showGlassNewTicket=false;
        $location.path('/logged/'+$routeParams.projectId+'/'+ $routeParams.sprintId);
    };
    
    $scope.printPdf = function() {
        $pdf.printTickets([$scope.ticket]);
    }
    

    $scope.hide=function (){
        //$scope.$parent.showGlassNewTicket=false;
        $location.path('/logged/'+$routeParams.projectId+'/'+ $routeParams.sprintId);
    };
    
    
}]);
