app.factory("Network", ["$http",
  function($http) {
  
    var isMocked = true;

    function getProjets(callback) {
      if(isMocked === true) {
        callback([
          {"id":1,"nom":"Projet1","created_at":"2013-07-09T09:36:02.167Z","updated_at":"2013-07-09T09:36:02.167Z"}, 
          {"id":2,"nom":"Projet2","created_at":"2013-07-09T09:36:02.167Z","updated_at":"2013-07-09T09:36:02.167Z"}, 
          {"id":3,"nom":"Projet3","created_at":"2013-07-09T09:36:02.167Z","updated_at":"2013-07-09T09:36:02.167Z"}]);
      } else {
        $http.get("/projets")
          .success(callback)
          .error(
            function(data, status, headers, config) {
              console.log(data, status, headers, config);
            }
          );
      }
    }
    
    function getSprints(projectName, callback) {
    console.log(projectName);
      if(isMocked === true) {
        callback([{name:"sprint"}, {name:"sprint2"}, {name:"sprint3"}]);
      } else {
        $http.get("????")
          .success(callback)
          .error(
            function(data, status, headers, config) {
              console.log(data, status, headers, config);
            }
          );
      }
    }
    
    return {
      getProjets: function(callback) {
        getProjets(callback);
      },
      getSprints: function(projectName, callback) {
        getSprints(projectName, callback);
      }
    }

}]);
