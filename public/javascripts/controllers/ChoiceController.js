app.controller('ChoiceController', ['$scope', '$location' , 'Network', function($scope, $location, $network) {
  var url = $location.path().split("/");
  $scope.title="";
    if (url.length === 3){
      var pollid=+url[2];
    console.log("initialisation du sondage "+pollid);
    $scope.title="Sondage "+pollid;
    var poll;
    $network.getPoll(function (data){
      console.log(data.open);
      poll=data;
    },
      pollid);
    if (poll.open === true){
     $scope.open="sondage ouvert";
    }else
    {
      $scope.open="sondage fermé";
    }
   
  }else{
      console.log("Nouveau sondage");
      $scope.title="Nouveau sondage";
  }
}
]);
