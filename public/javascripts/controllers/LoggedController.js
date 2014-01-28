app.controller('LoggedController', ['$scope', 'Network', '$routeParams', '$rootScope', '$location', 'Pdf', function($scope, $network, $routeParams, $rootScope, $location, $pdf) {
    
    $scope.upArrowURL = 'images/arrow_up.png';
    $scope.downArrowURL = 'images/arrow_down.png';
    $scope.selected = $routeParams.sprintId;

    var ticketPriorityToGet;
    
    $network.getSprints(function(sprints) {
        $scope.sprints = sprints;
        loadTickets();
    }, $routeParams.projectId);
    
    function loadTickets() {
        $network.getTickets(function(tickets) {
            $scope.tickets = tickets;
        }, $routeParams.projectId, $routeParams.sprintId);
    };
    
    $scope.clickOnSprint = function(sprint) {
        console.log(sprint);
        $location.path('/logged/'+$routeParams.projectId+'/'+sprint.id);
    };
    
    $scope.clickOnTicket = function(ticketId) {
        
        //$network.getTicketById(function(ticket) {
        //console.log('controller 3');
        $location.path('/displayTicket/'+$routeParams.projectId + '/' + $routeParams.sprintId + '/' +  ticketId);
        //$scope.showGlassNewTicket=!$scope.showGlassNewTicket;
        //}, ticketId);
    };
    
    $scope.priorityUp = function(ticket){
        ticketPriorityToGet = ticket.priority + 1;
        $network.getTicketsByPriority(function(gotTicket){
            gotTicket.priority -= 1; 
            ticket.priority += 1;
            $network.saveTicket(gotTicket);
            $network.saveTicket(ticket);
            loadTickets();
        },ticketPriorityToGet);
    };
    
    $scope.priorityDown = function(ticket){
        ticketPriorityToGet = ticket.priority - 1;
        $network.getTicketsByPriority(function(gotTicket){
            gotTicket.priority += 1; 
            ticket.priority -= 1;
            $network.saveTicket(gotTicket);
            $network.saveTicket(ticket);
            loadTickets();
        },ticketPriorityToGet);
    };
    $scope.delete = function(ticket){
        $network.deleteTicket(ticket);
        loadTickets();
    };
    $scope.printPdf = function() {
        // create the pdf
        $pdf.printTickets($scope.tickets);
    };
    $scope.displayReport = function() {
        // create the report as html
        $location.path('/report/'+$routeParams.projectId + '/' + $routeParams.sprintId );
    };
    
    $scope.clickOnBack = function() {
        $location.path('/login');
    };

        // save the tickets
    $scope.save = function(){

        var data = angular.toJson($scope.tickets);

        var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')

        a.download = "tickets.json";
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':');
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
    };

    
}]);
