app.factory("Network", ["$http",
  function($http) {
  
    var isMocked = true;

    function getProjets(callback) {
      if(isMocked === true) {
        callback([{name:"menottes"}, {name:"menottes2"}, {name:"menottes3"}]);
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
