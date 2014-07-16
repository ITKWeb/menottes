app.controller('ReportController', ['$scope', 'Network', '$routeParams', '$location', function ($scope, $network, $routeParams, $location) {

    $network.getProjet(function (project) {
        $scope.projectName = project.nom;
    }, $routeParams.projectId);



    $network.getSprint(function (sprint) {
        console.log(sprint + "/" + sprint.planif);
		$scope.sprint = sprint;
        if (sprint.planif  != undefined) {
		    var dateFormat = 'DD / MM / YYYY';
            $scope.sprint.formattedPlanifDate = moment($scope.sprint.planif).format(dateFormat);
            $scope.sprint.formattedBeginDate = moment($scope.sprint.begin).format(dateFormat);
            $scope.sprint.formattedFreezeDate = moment($scope.sprint.freeze).format(dateFormat);
            $scope.sprint.formattedDemoDate = moment($scope.sprint.demo).format(dateFormat);
        }
    }, $routeParams.projectId, $routeParams.sprintId);

    $network.getTickets(function (tickets) {
        $scope.tickets = tickets;

        $scope.ticketsDone = [];
        $scope.ticketsDoing = [];
        $scope.ticketsToDo = [];
        for (var i=0; i<tickets.length; i++) {
            if (tickets[i].etat === undefined || tickets[i].etat === null) {
                $scope.ticketsToDo[$scope.ticketsToDo.length] = tickets[i];
            } else if (tickets[i].etat === "Clos") {
                $scope.ticketsDone[$scope.ticketsDone.length] = tickets[i];
            } else {
                $scope.ticketsDoing[$scope.ticketsDoing.length] = tickets[i];
            }
        }
    }, $routeParams.projectId, $routeParams.sprintId);

    $scope.save = function() {
        console.log(document.styleSheets[0].cssRules[0]);
        var html = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN"><HTML><HEAD><META HTTP-EQUIV="CONTENT-TYPE" CONTENT="text/html; charset=utf-8"><TITLE></TITLE><STYLE TYPE="text/css">';
        // get CSS
        html += '</STYLE></HEAD><BODY LANG="fr-FR" DIR="LTR">'
        html += document.getElementById("content").outerHTML;
        html += '</BODY></HTML>';


        var blob = new Blob([html], {type: 'text/html'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')

        a.download = "report.html";
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl =  ['text/html', a.download, a.href].join(':');
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
        a.dispatchEvent(e);
        //alert(html);
    };

    $scope.back = function() {
        $location.path('/logged/'+$routeParams.projectId+'/'+ $routeParams.sprintId);
    };
}]);
