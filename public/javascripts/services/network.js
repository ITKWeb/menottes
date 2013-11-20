app.factory("Network", ["$http",
    function ($http) {
  
    var isMocked = true;
    var isLoginMocked = true;
    var dateFormat = 'Do MMM YYYY';
    var isUsersMocked = true;

    var users = [{"login":"aaa","password":"aaa"},{"login":"bbb","password":"bbb"},{"login":"ccc","password":"ccc"}];

    var sprints = [
          {id:0, nom:"Backlog"},
          {id:1, nom:"Sprint1"},
          {id:2, nom:"Sprint2"},
          {id:3, nom:"Sprint3"}
        ];

    var projects = [{"id":1,"nom":"Projet1","created_at":"2013-07-09T09:36:02.167Z","updated_at":"2013-07-09T09:36:02.167Z"}, 
          {"id":2,"nom":"Projet2","created_at":"2013-07-09T09:36:02.167Z","updated_at":"2013-07-09T09:36:02.167Z"}, 
          {"id":3,"nom":"Projet3","created_at":"2013-07-09T09:36:02.167Z","updated_at":"2013-07-09T09:36:02.167Z"}];
    
    var polls = [{"id":1, "nom":"Bière en ville", "description":"petite soirée à 12° au Triskell", "startDate":moment('2013-08-01'),"endDate":moment('2013-08-30'),"creationDate":moment('2013-07-29'),"updateDate":moment('2013-08-15')},
                 {"id":2, "nom":"Pétanque", "description":"apportez votre triplette !", "startDate":moment('2013-10-01'),"endDate":moment('2013-10-30'),"creationDate":moment('2013-10-01'), "updateDate":moment('2013-10-15'), users:[{nom:"bastien", choix:[2], commentaire:"2 triplettes et un cochonnet"}, {nom:"romain", choix:[2, 3], commentaire:"1 triplette pas de cochonnet"}]}];
    /*
    var completePolls=[
    
    {"id":1,"open":true,"open_date":"2013-08-30T11:29:06.921Z","close_date":"2013-08-30T11:29:14.785Z","created_at":"2013-08-30T11:32:13.809Z","updated_at":"2013-08-30T11:32:13.809Z","participants":[{"id":1,"created_at":"2013-08-30T11:32:18.818Z","updated_at":"2013-08-30T12:22:54.339Z","user_id":3,"choices":[{"id":1,"name":"monChoix1","created_at":"2013-08-30T11:27:48.278Z","updated_at":"2013-08-30T12:22:47.870Z","poll_id":1,"participant_id":1}]}]},
    
    {"id":1,"false":true,"open_date":"2013-08-30T11:29:06.921Z","close_date":"2013-08-30T11:29:14.785Z","created_at":"2013-08-30T11:32:13.809Z","updated_at":"2013-08-30T11:32:13.809Z","participants":[{"id":1,"created_at":"2013-08-30T11:32:18.818Z","updated_at":"2013-08-30T12:22:54.339Z","user_id":3,"choices":[{"id":1,"name":"monChoix2","created_at":"2013-08-30T11:27:48.278Z","updated_at":"2013-08-30T12:22:47.870Z","poll_id":2,"participant_id":5}]}]}
         
    ];*/

	var tickets = [{"id":4,"titre":"Documentation Agricommand","description":"Cuong doit écrire toute la doc car Nelly a la flemme","importance":5,"poids":5,"estimation_dev":5,"estimation_test":10, "tempsPris":null,"created_at":"2013-07-09T12:12:25.811Z","updated_at":"2013-07-09T12:12:25.811Z","projet_id":3, "personne": "Cuong", "priority": 2, "etat": "A tester"},
            {"id":3,"titre":"Migration Agricommand","description":"Nelly doit migrer Agricommand car Cuong lui passe le relai","importance":5,"poids":5,"estimation_dev":5,"estimation_test":10,"tempsPris":null,"created_at":"2013-07-09T12:12:32.179Z","updated_at":"2013-07-09T12:12:32.179Z","projet_id":3, "personne": "Nelly", "priority": 3, "etat": "En cours"},
            {"id":2,"titre":"Design de l'application","description":"Mise en place de licornes partout sur le site","importance":5,"poids":5,"estimation_dev":5,"estimation_test":10,"tempsPris":null,"created_at":"2013-07-09T12:12:25.811Z","updated_at":"2013-07-09T12:12:25.811Z","projet_id":3, "personne": "Laurent", "priority": 5, "etat": "En cours"},
            {"id":5,"titre":"Développement Agricommand","description":"Developpement AngularJS","importance":5,"poids":5,"estimation_dev":5,"estimation_test":10,"tempsPris":null,"created_at":"2013-07-09T12:12:25.811Z","updated_at":"2013-07-09T12:12:25.811Z","projet_id":3, "personne": "Romain", "priority": 4, "etat": "A tester"},
            {"id":6,"titre":"Redesign de l'application","description":"Mise en place de poney partout sur le site à la place des licornes","importance":5,"poids":5,"estimation_dev":5,"estimation_test":10,"tempsPris":null,"created_at":"2013-07-09T12:12:25.811Z","updated_at":"2013-07-09T12:12:25.811Z","projet_id":3, "personne": "Jennifer", "priority": 1, "etat": "En cours"},];

	  function login(callback, errorCallback, login, password) {
          if (isLoginMocked === true) {
              if ((login === "aaa") && (password === "aaa")) {
                   callback(
                  {"id":1,"nom":"Test","login":"aaa","password":"aaa","email":"menottes@itkweb.com"}
              );
              } else {
                  callback({});
              }
          } else {
              $http.post("/users",{login:login, password:password})
                  .success(callback)
                  .error(errorCallback);
          }
      }

    function getUsers(callback) {
      if(isUsersMocked === true) {
        callback(users);
      } else {
        /*FAIRE LA PARTIE SERVEUR*/
        console.log("FAIRE LA PARTIE SERVEUR");
      }
    }
    function getProjets(callback) {
      if(isMocked === true) {
        callback(projects);
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
    
    function getPolls(callback) {
      if(isMocked === true) {
        callback(polls);
      } else {
        $http.get("/polls")
          .success(callback)
          .error(
            function(data, status, headers, config) {
              console.log(data, status, headers, config);
            }
          );
      }
    }
    
    function getPoll(callback, pollId) {
      if(isMocked === true) {
        for (i=0;i<polls.length;i++) {
          if (polls[i].id == pollId) {
            callback(polls[i]);
          }
        }
      } else {
        $http.get("/polls/"+pollId)
          .success(callback)
          .error(
            function(data, status, headers, config) {
              console.log(data, status, headers, config);
            }
          );
      }
    }
    
    function getSprints(callback, projectId) {
      if(isMocked === true) {
        callback(sprints);
      } else {
        $http.get("/sprints/"+projectId)
          .success(callback)
          .error(
            function(data, status, headers, config) {
              console.log(data, status, headers, config);
            }
          );
      }
    }

    function createSprint(sprint) {
      sprints.push(sprint);
      var data = {"nom": sprint.nom};
      if (isMocked === true) {
        data.id = sprints[sprints.length-1].id+1; // calculate id for new mocked project
        sprints.push(data); // add new project to mocked projects list
      }
    }
    
    function getTickets(callback, projectId, sprintId) {
      if(isMocked === true) {
        callback(tickets);
      } else {
        var url = "/tickets/"+projectId+"/"+sprintId;
        $http.get(url)
          .success(callback)
          .error(
            function(data, status, headers, config) {
              console.log(data, status, headers, config);
            }
          );
      }
    }

    function getTicketById(callback, ticketId) {
      if(isMocked === true) {
        console.log('ticketId '+ticketId);
        var i = 0;
        var exitepas;
        while ((i < tickets.length) && (tickets[i].id != ticketId) ){
            i++;
        }

        console.log('i = '+ i +' '+tickets.length);
        callback(tickets[i]);
       /* if (tickets[i].id == ticketId)
        {
          callback(tickets[i]);
        }//test*/
      } else {
        //a changer
        var url = "/tickets/"+projectId+"/"+sprintId;
        $http.get(url)
          .success(callback)
          .error(
            function(data, status, headers, config) {
              console.log(data, status, headers, config);
            }
          );
      }
    }

    function getTicketsByPriority(callback, priorite) {
      if(isMocked === true) {
        var i;
        for(i=0;i < tickets.length;i++){
          if(tickets[i].priority == priorite){
              callback(tickets[i]);
          }
        }
      } else {
        //TODO
      }
    }

    function createProject(project) {
     
      var data = {"nom": project.nom};
      if (isMocked === true) {
        data.id = projects[projects.length-1].id+1; // calculate id for new mocked project
        projects[projects.length] = data; // add new project to mocked projects list
      } else {
        var url = "/projets/";
        $http.post(url, data)
        .error(
          function(data, status, headers, config) {
            console.log(data, status, headers, config);
          }
        );
      }
    }

    function createTicket(ticket) {
     
      var data = {"titre": ticket.titre, "description": ticket.description, "trac_id": ticket.trac_id, "importance": ticket.importance};
      if (isMocked === true) {
        tickets[tickets.length] = data;
      } else {
        var url = "/tickets/";
        $http.post(url, data)
        .error(
          function(data, status, headers, config) {
            console.log(data, status, headers, config);
          }
        );
      }
    }

    function saveTickets() {
      // TODO
    }

    function createPoll(poll) {
     
      var data = {"nom": poll.nom, "description":poll.description, "startDate":poll.startDate, "endDate":poll.endDate};
      if (isMocked === true) {
        data.id = polls[polls.length-1].id+1; // calculate id for new mocked poll
        var now = moment();
        data.creationDate = now;
        data.updateDate = now;
        polls[polls.length] = data; // add new poll to mocked polls list
      } else {
        var url = "/polls/";
        $http.post(url, data)
        .error(
          function(data, status, headers, config) {
            console.log(data, status, headers, config);
          }
        );
      }
    }
    
    return {
      login: function(callback, errorCallback, log, pass) {
        login(callback, errorCallback, log, pass);
      },
      getUsers: function(callback) {
        getUsers(callback);
      },
      getProjets: function(callback) {
        getProjets(callback);
      },
      getPolls: function(callback) {
        getPolls(callback);
      },
      getPoll: function(callback, pollId) {
        getPoll(callback, pollId);
      },
      getSprints: function(callback, projectId) {
        getSprints(callback, projectId);
      },
      createSprint: function(sprint) {
        createSprint(sprint);
      },
      getTickets: function(callback, projectId, sprintId) {
        getTickets(callback, projectId, sprintId);
      },
      saveTickets: function() {
        saveTickets();
      },
      getTicketsByPriority: function(callback, priority){
        getTicketsByPriority(callback, priority);
      },
      getTicketById: function(callback, ticketId) {
        getTicketById(callback, ticketId);
      },
      createProject: function(project) {
        createProject(project);
      },
      createTicket: function(ticket) {
        createTicket(ticket);
      },
      createPoll: function(poll) {
        createPoll(poll);
      },
      getDateFormat: function() {
        return dateFormat;
      }
    }

}]);
