app.controller('MainController', ['$scope', '$rootScope', function($scope, $rootScope) {

  // translation : 
  $rootScope.currentLanguage = navigator.language.substring(0,2);
  console.log(navigator.language);

}]);
