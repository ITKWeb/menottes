app.controller('ChoiceController', ['$scope', '$location' ,function($scope, $location) {
  var url = $location.path().split("/");
    if (url.length === 3){
    console.log("initialisation du sondage "+url[2]);
  }else{
      console.log("Nouveau sondage");
  }
}
]);
