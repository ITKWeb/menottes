app.controller('ChoiceController', ['$scope', '$location' ,function($scope, $location) {
  var url = $location.path().split("/");
  $scope.title="";
    if (url.length === 3){
      var pollid=+url[2];
    console.log("initialisation du sondage "+pollid);
    $scope.title="Sondage "+pollid;
  }else{
      console.log("Nouveau sondage");
      $scope.title="Nouveau sondage";
  }
}
]);
